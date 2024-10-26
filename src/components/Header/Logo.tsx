import classNames from 'classnames'
import { FC } from 'react'

export const Logo: FC = () => {
  return (
    <div
      className={classNames(
        'font-mono text-xl',
        'text-gray-400 dark:text-gray-200',
        'select-none text-nowrap',
      )}
    >
      <span className="text-brand-500 dark:text-brand-300">Webdev</span>
      <span className="text-brand-800 dark:text-brand-100">Home</span>
    </div>
  )
}
