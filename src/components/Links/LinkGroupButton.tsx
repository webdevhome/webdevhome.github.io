import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

interface Props {
  onClick?: () => void
}

export const LinkGroupButton: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'justify-self-center',
        'text-sm font-semibold',
        'tracking-wide',
        'my-2 px-4 py-1',
        'border',
        'bg-clip-padding',
        'text-gray-600 hover:text-gray-800 active:text-gray-800',
        'dark:text-gray-300 dark:hover:text-gray-100 dark:active:text-gray-100',
        'border-black/15 active:border-black/25',
        'dark:border-white/20 dark:hover:border-white/20 dark:active:border-white/25',
        'bg-black/5 hover:bg-black/10 active:bg-black/25',
        'dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/25',
        'rounded',
        'select-none',
        'cursor-default',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
