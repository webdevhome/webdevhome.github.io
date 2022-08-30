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
        'font-semibold text-gray-600 dark:text-gray-300 text-sm',
        'tracking-wide',
        'my-2 px-4 py-1',
        'border border-gray-300 hover:border-gray-400',
        'dark:border-gray-500 dark:hover:border-gray-400',
        'hover:bg-gray-200 active:bg-gray-300',
        'dark:hover:bg-gray-600 dark:active:bg-gray-500',
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
