import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { XIcon } from 'lucide-react'
import { type FC } from 'react'
import { $visibleLinkGroups } from '../links/hiddenUrls.ts'
import { JumpLink } from './JumpLink.tsx'
import {
  toggleJumpLinksMobile,
  useShowJumpLinks,
  useShowJumpLinksMobile,
} from './useJumpLinks.ts'

export const JumpLinks: FC = () => {
  const showJumpLinks = useShowJumpLinks()
  const showJumpLinksMobile = useShowJumpLinksMobile()
  const visibleLinkGroups = useStore($visibleLinkGroups)

  return (
    <>
      <div
        className={classNames('md:hidden', {
          'z-20 backdrop-blur-sm max-md:fixed max-md:inset-0 max-md:block max-md:bg-black/25 dark:max-md:bg-black/50':
            showJumpLinksMobile,
          'max-md:hidden': !showJumpLinksMobile,
        })}
        onClick={toggleJumpLinksMobile}
      />

      <div
        className={classNames(
          'max-md:fixed max-md:top-0 max-md:bottom-0',
          'max-md:bg-gray-200 dark:max-md:bg-gray-800',
          'jump-links w-[320px]',
          'max-md:transition-[left] max-md:duration-300',
          'z-30',
          {
            'max-md:left-0 max-md:grid max-md:grid-rows-[auto_1fr]':
              showJumpLinksMobile,
            'max-md:-left-[300px]': !showJumpLinksMobile,
            'md:grid': showJumpLinks,
            'md:hidden': !showJumpLinks,
          },
        )}
      >
        <button
          className="m-4 place-self-end text-black md:hidden dark:text-white"
          onClick={toggleJumpLinksMobile}
        >
          <XIcon />
        </button>

        <div className="flex flex-col gap-0.5 p-2 max-md:overflow-auto md:flex">
          {visibleLinkGroups.map((category) => (
            <JumpLink
              key={category.id}
              label={category.title}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </>
  )
}
