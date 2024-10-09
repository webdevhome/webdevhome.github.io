import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { links } from '../../links'
import { LinkGroup } from './LinkGroup'

export const Links: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))]',
        'gap-x-2 gap-y-8 sm:gap-x-4 lg:gap-x-8',
        'px-page py-4',
      )}
    >
      {links.items.map((group, index) => (
        <LinkGroup group={group} key={group.name} />
      ))}
    </div>
  )
}
