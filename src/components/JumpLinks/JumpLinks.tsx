import classNames from 'classnames'
import { XIcon } from 'lucide-react'
import { FC } from 'react'
import { links } from '../../links'
import { useAllLinksInGroupAreHidden } from '../../stores/hiddenLinks/hiddenLinksHooks'
import { useToggleJumpLinks } from '../App/useToggleJumpLinks'
import { JumpLink } from './JumpLink'

export const JumpLinks: FC = () => {
  const allLinksInGroupAreHidden = useAllLinksInGroupAreHidden()
  const toggleJumpLinks = useToggleJumpLinks()

  function handleMobileCloseClick() {
    toggleJumpLinks.toggleMobile()
  }

  return (
    <>
      <div
        className={classNames('md:hidden', {
          'max-md:fixed max-md:inset-0 max-md:block max-md:bg-black/50':
            toggleJumpLinks.showJumpLinksMobile,
          'max-md:hidden': !toggleJumpLinks.showJumpLinksMobile,
        })}
        onClick={handleMobileCloseClick}
      />

      <div
        className={classNames(
          'max-md:fixed max-md:bottom-0 max-md:top-0',
          'max-md:bg-white dark:max-md:bg-gray-800',
          'jump-links w-[300px]',
          'max-md:transition-[left] max-md:duration-300',
          {
            'max-md:left-0 max-md:grid max-md:grid-rows-[auto,1fr]':
              toggleJumpLinks.showJumpLinksMobile,
            'max-md:-left-[300px]': !toggleJumpLinks.showJumpLinksMobile,
            'md:grid': toggleJumpLinks.showJumpLinks,
            'md:hidden': !toggleJumpLinks.showJumpLinks,
          },
        )}
      >
        <div
          className="m-4 place-self-end text-black dark:text-white md:hidden"
          onClick={handleMobileCloseClick}
        >
          <XIcon />
        </div>

        <div className="p-page flex flex-col gap-1 max-md:overflow-auto md:flex">
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
    </>
  )
}
