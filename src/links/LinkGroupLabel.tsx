import classNames from 'classnames'
import { type FC } from 'react'
import type { LinkGroup } from './links.ts'

type Props = {
  group: LinkGroup | null
  showGroup: boolean
}

export const LinkGroupLabel: FC<Props> = ({ group, showGroup }) => {
  if (!showGroup) {
    return null
  }

  if (group === null) {
    return null
  }

  return (
    <div className="mt-0.5 flex items-center gap-1.5">
      <div
        className={classNames([
          'h-2 w-2 rounded-full',
          `bg-${group.color}-600 dark:bg-${group.color}-600`,
        ])}
      ></div>
      <div
        className={classNames([
          'text-xs opacity-70',
          `text-${group.color}-800 dark:text-${group.color}-300`,
        ])}
      >
        {group?.name ?? '-'}
      </div>
    </div>
  )
}
