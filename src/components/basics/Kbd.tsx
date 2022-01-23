import classNames from 'classnames'
import { FC } from 'react'

export const Kbd: FC = ({ children }) => {
  return (
    <kbd
      className={classNames(
        'px-1',
        'bg-gray-100',
        'border border-gray-300',
        'rounded-md',
        'font-mono text-base text-brand-700',
      )}
    >
      {children}
    </kbd>
  )
}
