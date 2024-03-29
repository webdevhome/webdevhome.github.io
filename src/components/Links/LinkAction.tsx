import classNames from 'classnames'
import { FC, MouseEvent, PropsWithChildren } from 'react'

interface Props {
  className?: string
  hasHover?: boolean
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export const LinkAction: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  hasHover = false,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        className,
        'grid items-center justify-center',
        'px-2',
        'cursor-default',
        {
          'hover:bg-gray-300 active:bg-gray-400': hasHover,
          'dark:hover:bg-gray-500 dark:active:bg-gray-400': hasHover,
        },
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
