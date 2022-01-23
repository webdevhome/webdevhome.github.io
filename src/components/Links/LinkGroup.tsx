import {
  mdiCheckboxMultipleBlankOutline,
  mdiCheckboxMultipleOutline,
} from '@mdi/js'
import classNames from 'classnames'
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
import { MdiIcon } from '../Icon/MdiIcon'
import { Link } from './Link'
import { LinkGroupButton } from './LinkGroupButton'

interface Props {
  group: ILinkGroup
}

export const LinkGroup = memo<Props>(function LinkGroup({ group }) {
  const allLinksInGroupAreHidden = useAllLinksInGroupAreHidden()
  const isCurrentAppMode = useIsCurrentAppMode()
  const getIsLinkHidden = useGetIsLinkHidden()
  const dispatch = useAppDispatch()

  const [showHiddenLinks, setShowHiddenLinks] = useState(false)

  const hiddenLinks = useMemo(() => {
    return group.items.filter((item) => getIsLinkHidden(item))
  }, [group.items, getIsLinkHidden])

  const allGroupLinksAreHidden = useCallback(
    (items: LinkItem[]): boolean => {
      return allLinksInGroupAreHidden(items.map((link) => link.url))
    },
    [allLinksInGroupAreHidden],
  )

  const handleToggleGroupClick = useCallback(
    (...items: LinkItem[]): void => {
      dispatch(toggleHiddenLinksGroup(items.map((link) => link.url)))
    },
    [dispatch],
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
    <div>
      <div className="flex gap-x-1 mb-2">
        <div
          className={classNames(
            'flex-auto',
            'px-4 py-2',
            'bg-brand-100',
            'font-semibold uppercase tracking-wider',
            'text-brand-700',
            'rounded-md',
          )}
        >
          {group.name}
        </div>

        {isCurrentAppMode(AppMode.customize) ? (
          <div
            className={classNames(
              'grid items-center justify-center',
              'px-2',
              'hover:bg-gray-200 active:bg-gray-300',
              {
                'text-brand-700': !allGroupLinksAreHidden(group.items),
                'text-gray-400 hover:text-gray-500 active:text-gray-600':
                  allGroupLinksAreHidden(group.items),
              },
              'rounded',
            )}
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

      <div className="grid gap-y-[1px]">
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
            <LinkGroupButton onClick={handleShowHiddenLinksClick}>
              {showHiddenLinksButtonLabel}
            </LinkGroupButton>

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
