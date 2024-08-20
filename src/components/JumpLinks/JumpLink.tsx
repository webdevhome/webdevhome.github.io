import classNames from 'classnames'
import { FC } from 'react'
import { slugify } from '../../utils/slugify'

interface Props {
  label: string
  color?: string
}

export const JumpLink: FC<Props> = ({ label, color = 'gray' }) => {
  function handleClick() {
    const target = document.getElementById(slugify(label))
    if (target === null) return

    target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={classNames(
        'jump-link',
        'px-3 py-1 md:px-2.5 md:py-0.5',
        'rounded-md',
        'cursor-pointer',
        'text-sm font-semibold',
        `bg-${color}-100 dark:bg-${color}-600`,
        `text-${color}-800 dark:text-${color}-50`,
        'select-none',
      )}
      onClick={handleClick}
    >
      {label}
    </div>
  )
}
