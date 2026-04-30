import classNames from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

export const Kbd: FC<PropsWithChildren> = ({ children }) => {
  return (
    <kbd
      className={classNames(
        'px-1',
        'bg-gray-100 dark:bg-gray-600',
        'border border-gray-300 dark:border-gray-500',
        'rounded-md',
        'text-brand-700 dark:text-brand-200 font-mono text-sm',
      )}
    >
      {children}
    </kbd>
  )
}
