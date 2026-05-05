import classNames from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

export const Kbd: FC<PropsWithChildren> = ({ children }) => {
  return (
    <kbd
      className={classNames(
        'px-1',
        'dark:bg-brand-800 bg-brand-100',
        'border-brand-400 dark:border-brand-600 border',
        'text-brand-700 dark:text-brand-100 font-mono text-sm',
        'font-semibold',
        'rounded-md',
      )}
    >
      {children}
    </kbd>
  )
}
