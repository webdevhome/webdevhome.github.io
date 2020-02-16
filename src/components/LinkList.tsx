import React, { FC, memo } from 'react'
import { LinkGroup as ILinkGroup } from '../links'
import { useCurrentMode } from '../stores/currentModeStore'
import { LinkGroup } from './LinkGroup'
import { Link } from './Link'

interface LinkListProps {
  links: ILinkGroup[]
  hiddenLinks: string[]
}

export const LinkList: FC<LinkListProps> = memo(({ links, hiddenLinks }) => {
  const { mode } = useCurrentMode()

  function getLinkGroup (group: ILinkGroup): JSX.Element | null {
    const noVisibleLinksInGroup = group.items
      .every(link => hiddenLinks.includes(link.url))

    if (noVisibleLinksInGroup && mode !== 'customize') { return null }

    return (
      <LinkGroup key={group.name} name={group.name}>
        {group.items.map(link => (
          <Link
            key={link.url}
            title={link.title}
            url={link.url}
            icon={link.icon}
            color={link.color}
            customize={mode === 'customize'}
            visible={!hiddenLinks.includes(link.url)}
          />
        ))}
      </LinkGroup>
    )
  }

  return <>{links.map(getLinkGroup)}</>
})
