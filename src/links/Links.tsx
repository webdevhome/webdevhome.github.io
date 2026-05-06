import classNames from 'classnames'
import { type FC } from 'react'
import { LinkGroup } from '../link-groups/LinkGroup.tsx'
import { categoryToLinksMap } from './links.ts'

export const Links: FC = () => {
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
        .map(([group, links]) => (
          <LinkGroup group={group} links={links} key={group.id} />
        ))
        .toArray()}
    </div>
  )
}
