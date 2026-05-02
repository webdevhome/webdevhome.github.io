import { Button } from '@headlessui/react'
import classNames from 'classnames'
import { type FC, type MouseEventHandler, type PropsWithChildren } from 'react'

type Props = {
  type?: 'primary' | 'default'
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const UiButton: FC<PropsWithChildren<Props>> = ({
  type = 'default',
  onClick,
  children,
}) => {
  return (
    <Button
      className={classNames([
        'px-3 py-1.5',
        'rounded',
        'shrink-0',
        {
          'bg-gray-300 hover:bg-gray-400 active:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500':
            type === 'default',
          'bg-brand-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 dark:active:bg-brand-400 text-white':
            type === 'primary',
        },
        'cursor-default',
      ])}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
