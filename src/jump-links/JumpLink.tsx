import classNames from 'classnames'
import { type FC } from 'react'
import { slugify } from '../utils/slugify.ts'
import { setShowJumpLinksMobile } from './useJumpLinks.ts'

type Props = {
  label: string
  color?: string
}

export const JumpLink: FC<Props> = ({ label, color = 'gray' }) => {
  function handleClick() {
    const target = document.getElementById(slugify(label))
    if (target === null) return

    target.scrollIntoView({ behavior: 'smooth' })
    setShowJumpLinksMobile(false)
  }

  return (
    <button
      className={classNames(
        'jump-link',
        'grid grid-cols-[auto_1fr] gap-1',
        'cursor-pointer',
        'text-base font-medium',
        `text-${color}-800 dark:text-${color}-300`,
        'text-left',
        'select-none',
        'group',
      )}
      onClick={handleClick}
    >
      <div
        className={classNames([
          'h-8 w-1.5 rounded-md',
          `bg-${color}-600 dark:bg-${color}-600`,
        ])}
      />
      <span className="grid items-center rounded-md px-2 group-hover:bg-black/10 dark:group-hover:bg-white/15">
        {label}
      </span>
    </button>
  )
}
