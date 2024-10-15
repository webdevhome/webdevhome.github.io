import classNames from 'classnames'
import { FC } from 'react'
import { links } from '../../links'
import { useAllLinksInGroupAreHidden } from '../../stores/hiddenLinks/hiddenLinksHooks'
import { useToggleJumpLinks } from '../App/useToggleJumpLinks'
import { JumpLink } from './JumpLink'

export const JumpLinks: FC = () => {
  const allLinksInGroupAreHidden = useAllLinksInGroupAreHidden()
  const toggleJumpLinks = useToggleJumpLinks()

  return (
    <div
      className={classNames(
        'fixed top-10 lg:static',
        'bg-white dark:bg-black lg:bg-white/20 dark:lg:bg-black/20',
        'jump-links px-page w-[300px] py-4',
        {
          'left-0': toggleJumpLinks.showJumpLinksMobile,
          '-left-full': !toggleJumpLinks.showJumpLinksMobile,
        },
      )}
    >
      <div className={classNames('flex flex-col gap-1 md:flex')}>
        {links.items
          .filter((group) => !allLinksInGroupAreHidden(group))
          .map((linkGroup, index) => (
            <JumpLink
              key={index}
              label={linkGroup.name}
              color={linkGroup.color}
            />
          ))}
      </div>
    </div>
  )
}
