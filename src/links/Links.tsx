import classNames from 'classnames'
import { type FC } from 'react'
import { LinkGroup } from '../link-groups/LinkGroup.tsx'
import { linkGroups } from './links.ts'

export const Links: FC = () => {
  return (
    <div
      className={classNames(
        'grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]',
        'gap-x-4 gap-y-8',
        'p-2',
      )}
    >
      {linkGroups.map((group) => (
        <LinkGroup group={group} key={group.name} />
      ))}
    </div>
  )
}
