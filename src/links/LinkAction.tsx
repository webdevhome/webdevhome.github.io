import classNames from 'classnames'
import { type FC, type MouseEvent, type PropsWithChildren } from 'react'

type Props = {
  className?: string
  hasHover?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const LinkAction: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  hasHover = false,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        className,
        'grid items-center justify-center',
        'px-2',
        'cursor-default',
        {
          'hover:bg-black/10 active:bg-black/15': hasHover,
          'dark:hover:bg-white/10 dark:active:bg-white/15': hasHover,
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
