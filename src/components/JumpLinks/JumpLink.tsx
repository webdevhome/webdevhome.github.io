import classNames from 'classnames'
import { FC } from 'react'
import { slugify } from '../../utils/slugify'
import { useToggleJumpLinks } from '../App/useToggleJumpLinks'

type Props = {
  label: string
  color?: string
}

export const JumpLink: FC<Props> = ({ label, color = 'gray' }) => {
  const toggleJumpLinks = useToggleJumpLinks()

  function handleClick() {
    const target = document.getElementById(slugify(label))
    if (target === null) return

    target.scrollIntoView({ behavior: 'smooth' })
    toggleJumpLinks.toggleMobile(false)
  }

  return (
    <div
      className={classNames(
        'jump-link',
        'grid grid-cols-[auto,1fr] gap-2',
        'cursor-pointer',
        'text-base font-medium',
        `text-${color}-800 dark:text-${color}-200`,
        'select-none',
        'group',
      )}
      onClick={handleClick}
    >
      <div
        className={classNames([
          'h-8 w-1.5 rounded-full',
          `bg-${color}-600 dark:bg-${color}-400`,
        ])}
      />
      <span className="grid items-center rounded-md px-2 group-hover:bg-black/10 dark:group-hover:bg-white/15">
        {label}
      </span>
    </div>
  )
}
