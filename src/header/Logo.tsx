import classNames from 'classnames'
import { type FC } from 'react'

export const Logo: FC = () => {
  return (
    <div
      className={classNames(
        'font-mono text-lg font-bold tracking-wider',
        'text-brand-600 dark:text-brand-50',
        'text-nowrap select-none',
      )}
    >
      <span className="text-brand-900 dark:text-brand-300">webdev</span>home
    </div>
  )
}
