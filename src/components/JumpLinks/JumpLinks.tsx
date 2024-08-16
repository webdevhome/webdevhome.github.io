import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { MdiIcon } from '../Icon/MdiIcon'
import { JumpLink } from './JumpLink'
import { links } from '../../links'
import { useAllLinksInGroupAreHidden } from '../../stores/hiddenLinks/hiddenLinksHooks'

export const JumpLinks: FC = () => {
  const allLinksInGroupAreHidden = useAllLinksInGroupAreHidden()

  const [isOpen, setIsOpen] = useState(false)

  function handleToggleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="jump-links px-page pt-4 lg:pt-8">
      <div
        className="flex items-center gap-x-2 md:hidden dark:text-white cursor-default select-none"
        onClick={handleToggleClick}
      >
        <MdiIcon path={isOpen ? mdiChevronUp : mdiChevronDown}></MdiIcon>
        <div>Jump to</div>
      </div>
      <div
        className={classNames('flex flex-wrap gap-1 md:flex pt-2', {
          hidden: !isOpen,
          block: isOpen,
        })}
      >
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
