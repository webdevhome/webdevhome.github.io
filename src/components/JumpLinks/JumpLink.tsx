import classNames from 'classnames'
import { FC } from 'react'
import { slugify } from '../../utils/slugify'
import { useToggleBackground } from '../App/useToggleBackground'

interface Props {
  label: string
  color?: string
}

export const JumpLink: FC<Props> = ({ label, color = 'gray' }) => {
  const toggleBackground = useToggleBackground()

  function handleClick() {
    const target = document.getElementById(slugify(label))
    if (target === null) return

    target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={classNames(
        'jump-link',
        'px-3 py-1 md:px-2.5 md:py-1',
        'rounded-md',
        'cursor-pointer',
        'text-sm font-semibold',
        `bg-${color}-100 dark:bg-${color}-600`,
        `text-${color}-800 dark:text-${color}-50`,
        'select-none',
        {
          [`outline outline-1 -outline-offset-1 outline-${color}-300 dark:outline-none`]:
            toggleBackground.showBackground,
        },
      )}
      onClick={handleClick}
    >
      {label}
    </div>
  )
}
