import { FC } from 'react'
import classNames from 'classnames'

export const AppFooter: FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col sm:items-center',
        'lg:flex-row',
        'px-page py-2',
        'text-gray-700 dark:text-gray-100',
        'bg-gray-100 dark:bg-gray-800',
        'border-t border-t-gray-300 dark:border-t-gray-500'
      )}
    >
      {children}
    </div>
  )
}
