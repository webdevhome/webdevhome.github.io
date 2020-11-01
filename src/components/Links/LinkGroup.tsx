import { mdiTableEye, mdiTableEyeOff } from '@mdi/js'
import React, { memo, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { LinkGroup as ILinkGroup, LinkItem } from '../../links'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { toggleHiddenLinksGroup } from '../../stores/hiddenLinks/hiddenLinksActions'
import {
  useAllLinksInGroupAreHidden,
  useLinkIsHidden
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
  const linkIsHidden = useLinkIsHidden()
  const dispatch = useDispatch()

  const linkGroupClasses = useMemo(() => {
    return classes({
      'link-group': true,
      'link-group--is-visible':
        !allLinksInGroupAreHidden(group.items.map((link) => link.url)) ?? false,
    })
  }, [allLinksInGroupAreHidden, group.items])

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
              <MdiIcon path={mdiTableEyeOff} />
            ) : (
              <MdiIcon path={mdiTableEye} />
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
            visible={!linkIsHidden(link)}
          />
        ))}
      </div>
    </div>
  )
})
