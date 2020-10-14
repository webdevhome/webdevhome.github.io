import React, { FC, memo, useCallback, useContext } from 'react'
import { AppMode, CurrentModeContext } from '../contexts/currentModeContext'
import { LinkGroup as ILinkGroup } from '../links'
import { Link } from './Link'

interface Props {
  links: ILinkGroup[]
  hiddenLinks: string[]
}

export const LinkGroup: FC<Props> = memo(function LinkGroup({
  links,
  hiddenLinks,
}) {
  const currentModeContext = useContext(CurrentModeContext)

  const getLinkGroup = useCallback(
    (group: ILinkGroup) => {
      if (currentModeContext === null) return null

      const { isCurrentMode } = currentModeContext

      const noVisibleLinksInGroup = group.items.every((link) =>
        hiddenLinks.includes(link.url)
      )

      if (noVisibleLinksInGroup && isCurrentMode(AppMode.customize)) return null

      return (
        <div className="link-group">
          <div className="link-group__name">{group.name}</div>
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
    },
    [currentModeContext, hiddenLinks]
  )

  return <>{links.map(getLinkGroup)}</>
})
