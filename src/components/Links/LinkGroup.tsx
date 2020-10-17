import { mdiTableEye, mdiTableEyeOff } from '@mdi/js'
import React, { memo, useCallback, useContext, useMemo } from 'react'
import { AppMode, CurrentModeContext } from '../../contexts/currentModeContext'
import {
  HiddenLinksContext,
  LinkVisibilityAction
} from '../../contexts/hiddenLinksContext'
import { LinkGroup as ILinkGroup, LinkItem } from '../../links'
import { classes } from '../../utils/jsx'
import { MdiIcon } from '../Icon/MdiIcon'
import { Link } from './Link'
import './LinkGroup.scss'

interface Props {
  group: ILinkGroup
}

export const LinkGroup = memo<Props>(function LinkGroup({ group }) {
  const currentModeContext = useContext(CurrentModeContext)
  const hiddenLinksContext = useContext(HiddenLinksContext)

  const linkGroupClasses = useMemo(() => {
    return classes({
      'link-group': true,
      'link-group--is-visible':
        !hiddenLinksContext?.allLinksAreHidden(...group.items) ?? false,
    })
  }, [group.items, hiddenLinksContext])

  const allGroupLinksAreHidden = useCallback(
    (items: LinkItem[]): boolean => {
      const { allLinksAreHidden } = hiddenLinksContext
      return allLinksAreHidden(...items)
    },
    [hiddenLinksContext]
  )

  const handleToggleGroupClick = useCallback(
    (...items: LinkItem[]): void => {
      const { toggleGroup, allLinksAreHidden } = hiddenLinksContext
      const newState: LinkVisibilityAction = allLinksAreHidden(...items)
        ? LinkVisibilityAction.show
        : LinkVisibilityAction.hide
      toggleGroup(newState, ...items.map((item) => item.url))
    },
    [hiddenLinksContext]
  )

  const noVisibleLinksInGroup = useMemo(() => {
    const { allLinksAreHidden } = hiddenLinksContext
    return allLinksAreHidden(...group.items)
  }, [group.items, hiddenLinksContext])

  const { isCurrentMode } = currentModeContext
  const { hiddenLinks } = hiddenLinksContext

  if (noVisibleLinksInGroup && !isCurrentMode(AppMode.customize)) return null

  return (
    <div className={linkGroupClasses}>
      <div className="link-group__header">
        <div className="link-group__name">{group.name}</div>

        {isCurrentMode(AppMode.customize) ? (
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
            title={link.title}
            url={link.url}
            icon={link.icon}
            color={link.color}
            customize={isCurrentMode(AppMode.customize)}
            visible={!hiddenLinks.includes(link.url)}
          />
        ))}
      </div>
    </div>
  )
})
