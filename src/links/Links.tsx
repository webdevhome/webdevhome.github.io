import classNames from 'classnames'
import { type FC } from 'react'
import { LinkGroup } from '../link-groups/LinkGroup.tsx'
import {
  toggleExpandLinkGroup,
  useExpandedLinkGroups,
} from '../link-groups/linkGroupsState.ts'
import { categoryToLinksMap } from './links.ts'

export const Links: FC = () => {
  const expandedLinkGroups = useExpandedLinkGroups()

  return (
    <div
      className={classNames(
        'grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]',
        'gap-x-4 gap-y-8',
        'p-2',
      )}
    >
      {categoryToLinksMap
        .entries()
        .map(([category, links]) => (
          <LinkGroup
            key={category.id}
            group={category}
            links={links}
            showHiddenLinks={expandedLinkGroups.has(category.id)}
            onToggleShowHiddenLinks={toggleExpandLinkGroup}
          />
        ))
        .toArray()}
    </div>
  )
}
