import classNames from 'classnames'
import { type FC, type ReactElement } from 'react'

type Props = {
  icon: ReactElement
  title?: string
  available?: boolean
  active?: boolean
  visible?: 'small-screens' | 'big-screens' | 'always'
  highlight?: boolean
  label?: string
  action?: () => void
}

export const UiActionButton: FC<Props> = ({
  icon,
  title,
  available = true,
  active = false,
  visible = 'always',
  highlight = false,
  label,
  action = () => {},
}) => {
  function handleClick() {
    if (!available) return
    action()
  }

  return (
    <button
      className={classNames(
        'flex items-center',
        'p-1.5',
        { 'lg:px-3': label !== undefined },
        {
          'max-md:hidden': visible === 'big-screens',
          'md:hidden': visible === 'small-screens',
        },
        'rounded-md',
        'select-none',
        {
          'opacity-30': !available,
          'hover:bg-black/10 active:bg-black/15':
            !active && !highlight && available,
          'bg-brand-500': active && !highlight,
          'hover:bg-brand-600 active:bg-brand-700':
            active && !highlight && available,
          'bg-brand-600': highlight,
          'hover:bg-brand-500 active:bg-brand-400': highlight && available,
          'dark:hover:bg-white/10 dark:active:bg-white/15':
            !active && !highlight && available,
          'dark:hover:bg-brand-600 dark:active:bg-brand-700':
            active && !highlight && available,
          'dark:bg-brand-100': highlight,
          'dark:hover:bg-brand-200 dark:active:bg-brand-300':
            highlight && available,
          'text-white': active && !highlight,
          'text-gray-800 dark:text-gray-100': !active && !highlight,
          'text-brand-50 dark:text-brand-900': highlight,
        },
      )}
      title={title}
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
    </button>
  )
}
