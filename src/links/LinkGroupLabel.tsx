import classNames from 'classnames'
import { type FC } from 'react'
import type { Category } from './links.ts'

type Props = {
  category: Category | null
  showGroup?: boolean
}

export const LinkGroupLabel: FC<Props> = ({ category, showGroup = true }) => {
  if (!showGroup) {
    return null
  }

  if (category === null) {
    return null
  }

  return (
    <div className="mt-0.5 flex items-center gap-1.5">
      <div
        className={classNames([
          'h-2 w-2 rounded-full',
          `bg-${category.color}-600 dark:bg-${category.color}-600`,
        ])}
      />

      <div
        className={classNames([
          'text-xs font-semibold opacity-70',
          `text-${category.color}-800 dark:text-${category.color}-300`,
        ])}
      >
        {category.title}
      </div>
    </div>
  )
}
