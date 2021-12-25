import {
  mdiCheckboxMultipleBlankOutline,
  mdiCheckboxMultipleOutline,
} from '@mdi/js'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { LinkGroup as ILinkGroup, LinkItem } from '../../links'
import { useAppDispatch } from '../../stores'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { toggleHiddenLinksGroup } from '../../stores/hiddenLinks/hiddenLinksActions'
import {
  useAllLinksInGroupAreHidden,
  useGetIsLinkHidden,
} from '../../stores/hiddenLinks/hiddenLinksHooks'
import { classes } from '../../utils/jsx'
import { MdiIcon } from '../Icon/MdiIcon'
import { Link } from './Link'
import './LinkGroup.scss'

interface Props {
  group: ILinkGroup
}

export const LinkGroup = memo<Props>(function LinkGroup({ group }) {
  const allLinksInGroupAreHidden = useAllLinksInGroupAreHidden()
  const isCurrentAppMode = useIsCurrentAppMode()
  const getIsLinkHidden = useGetIsLinkHidden()
  const dispatch = useAppDispatch()

  const [showHiddenLinks, setShowHiddenLinks] = useState(false)

  const linkGroupClasses = useMemo(() => {
    return classes({
      'link-group': true,
      'link-group--is-visible':
        !allLinksInGroupAreHidden(group.items.map((link) => link.url)) ?? false,
    })
  }, [allLinksInGroupAreHidden, group.items])

  const hiddenLinks = useMemo(() => {
    return group.items.filter((item) => getIsLinkHidden(item))
  }, [group.items, getIsLinkHidden])

  const allGroupLinksAreHidden = useCallback(
    (items: LinkItem[]): boolean => {
      return allLinksInGroupAreHidden(items.map((link) => link.url))
    },
    [allLinksInGroupAreHidden]
  )

  const handleToggleGroupClick = useCallback(
    (...items: LinkItem[]): void => {
      dispatch(toggleHiddenLinksGroup(items.map((link) => link.url)))
    },
    [dispatch]
  )

  const noVisibleLinksInGroup = useMemo(() => {
    return allLinksInGroupAreHidden(group.items.map((link) => link.url))
  }, [allLinksInGroupAreHidden, group.items])

  const showHiddenLinksButtonLabel = useMemo(() => {
    const hiddenLinksCount = hiddenLinks.length
    const isSingular = hiddenLinksCount === 1

    return showHiddenLinks
      ? `Hide ${hiddenLinksCount} disabled ${isSingular ? 'link' : 'links'}`
      : `Show ${hiddenLinksCount} disabled ${isSingular ? 'link' : 'links'}`
  }, [hiddenLinks.length, showHiddenLinks])

  function handleShowHiddenLinksClick(): void {
    setShowHiddenLinks(!showHiddenLinks)
  }

  if (noVisibleLinksInGroup && !isCurrentAppMode(AppMode.customize)) {
    return null
  }

  return (
    <div className={linkGroupClasses}>
      <div className="link-group__header">
        <div className="link-group__name">{group.name}</div>

        {isCurrentAppMode(AppMode.customize) ? (
          <div
            className="link-group__action"
            onClick={() => handleToggleGroupClick(...group.items)}
          >
            {allGroupLinksAreHidden(group.items) ? (
              <MdiIcon path={mdiCheckboxMultipleBlankOutline} />
            ) : (
              <MdiIcon path={mdiCheckboxMultipleOutline} />
            )}
          </div>
        ) : null}
      </div>

      <div className="link-group__list">
        {group.items.map((link) => (
          <Link
            key={link.url}
            link={link}
            searchable={link.searchUrl !== undefined}
            visible={!getIsLinkHidden(link)}
          />
        ))}

        {isCurrentAppMode(AppMode.default) && hiddenLinks.length > 0 ? (
          <>
            <div
              className="link-group__hidden-links-button"
              onClick={handleShowHiddenLinksClick}
            >
              {showHiddenLinksButtonLabel}
            </div>

            {showHiddenLinks ? (
              <div>
                {hiddenLinks.map((link) => (
                  <Link
                    key={link.url}
                    link={link}
                    searchable={link.searchUrl !== undefined}
                  />
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  )
})
