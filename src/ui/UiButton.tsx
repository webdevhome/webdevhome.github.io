import { Button } from '@headlessui/react'
import classNames from 'classnames'
import { type FC, type MouseEventHandler, type PropsWithChildren } from 'react'

type Props = {
  type?: 'primary' | 'default'
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const UiButton: FC<PropsWithChildren<Props>> = ({
  type = 'default',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <Button
      className={classNames([
        'px-3 py-1.5',
        'rounded',
        'shrink-0',
        'disabled:cursor-not-allowed',
        {
          'bg-gray-300 not-disabled:hover:bg-gray-400 not-disabled:active:bg-gray-500 disabled:bg-gray-200 disabled:text-gray-500 dark:bg-gray-600 dark:not-disabled:hover:bg-gray-500 dark:not-disabled:active:bg-gray-400 dark:disabled:bg-gray-700 dark:disabled:text-gray-400':
            type === 'default',
          'bg-brand-500 not-disabled:hover:bg-brand-600 not-disabled:active:bg-brand-700 dark:bg-brand-600 dark:not-disabled:hover:bg-brand-500 dark:not-disabled:active:bg-brand-400 text-white disabled:bg-gray-400 disabled:text-gray-700':
            type === 'primary',
        },
        'cursor-default',
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
