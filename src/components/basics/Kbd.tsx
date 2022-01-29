import classNames from 'classnames'
import { FC } from 'react'

export const Kbd: FC = ({ children }) => {
  return (
    <kbd
      className={classNames(
        'px-1',
        'bg-gray-100 dark:bg-gray-600',
        'border border-gray-300 dark:border-gray-500',
        'rounded-md',
        'font-mono text-base text-brand-700 dark:text-brand-200',
      )}
    >
      {children}
    </kbd>
  )
}
