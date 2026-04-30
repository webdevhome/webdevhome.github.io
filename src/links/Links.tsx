import classNames from 'classnames'
import { type FC } from 'react'
import { links } from './links.ts'
import { LinkGroup } from './LinkGroup.tsx'

export const Links: FC = () => {
  return (
    <div
      className={classNames(
        'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
        'gap-x-4 gap-y-8',
        'p-2',
      )}
    >
      {links.items.map((group) => (
        <LinkGroup group={group} key={group.name} />
      ))}
    </div>
  )
}
