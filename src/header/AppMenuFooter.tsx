import classNames from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

export const AppMenuFooter: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={classNames([
        'border-t border-gray-300',
        'dark:border-gray-600',
        'bg-gray-100',
        'dark:bg-gray-900',
        'px-2 py-1',
        'text-xs',
        'text-gray-500',
        'dark:text-gray-200',
        '[&>p]:my-1',
      ])}
    >
      {children}
    </div>
  )
}
