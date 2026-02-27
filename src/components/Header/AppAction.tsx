import classNames from 'classnames'
import { FC, ReactElement } from 'react'

type Props = {
  icon: ReactElement
  available?: boolean
  active?: boolean
  highlight?: boolean
  label?: string
  action?: () => void
}

export const AppAction: FC<Props> = ({
  icon,
  available = true,
  active = false,
  highlight = false,
  label,
  action = () => {},
}) => {
  function handleClick() {
    if (!available) return
    action()
  }

  return (
    <div
      className={classNames(
        'flex items-center',
        'p-1.5',
        { 'sm:px-3': label !== undefined },
        'rounded-md',
        'select-none',
        {
          'opacity-30': !available,
          'hover:bg-black/10 active:bg-black/15':
            !active && !highlight && available,
          'bg-brand-500': active && !highlight,
          'hover:bg-brand-600 active:bg-brand-700':
            active && !highlight && available,
          'bg-brand-500/15': highlight,
          'hover:bg-brand-500/25 active:bg-brand-500/35':
            highlight && available,
          'dark:hover:bg-white/10 dark:active:bg-white/15':
            !active && !highlight && available,
          'dark:hover:bg-brand-600 dark:active:bg-brand-700':
            active && !highlight && available,
          'dark:bg-white/10': highlight,
          'dark:hover:bg-white/20 dark:active:bg-white/30':
            highlight && available,
          'text-white': active && !highlight,
          'text-gray-800 dark:text-gray-100': !active && !highlight,
          'text-brand-600 dark:text-brand-300': highlight,
        },
      )}
      tabIndex={0}
      onClick={handleClick}
    >
      {icon}

      {label === undefined ? null : (
        <div
          className={classNames('ml-2 text-sm font-semibold', {
            'hidden lg:block': !highlight,
          })}
        >
          {label}
        </div>
      )}
    </div>
  )
}
