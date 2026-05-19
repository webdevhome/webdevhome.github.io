import classNames from 'classnames'
import { type FC, type ReactElement } from 'react'

type Props = {
  /** The icon that should be displayed in the button. */
  icon: ReactElement
  /** The button label. */
  label?: string
  /** The tooltip text. */
  title?: string
  /** Disable the button by passing `false`. */
  enabled?: boolean
  /** Control the toggle state. Passing `true` highlights the button. */
  active?: boolean
  /** Control on which screen sizes the button should be displayed. */
  visible?: 'small-screens' | 'big-screens' | 'always'
  /** Control if the button should be highlighted (be a primary button). */
  highlight?: boolean
  /** Control on which screen sizes the button label should be displayed. */
  labelVisible?: 'big-screens' | 'always'
  /** The button action that should be executed when clicked on the button. */
  action?: () => void
}

export const UiActionButton: FC<Props> = ({
  icon,
  title,
  label,
  labelVisible = 'big-screens',
  enabled = true,
  active = false,
  visible = 'always',
  highlight = false,
  action = () => {},
}) => {
  return (
    <button
      className={classNames(
        'flex items-center gap-2',
        'self-center',
        'px-1.5 py-1.5 sm:px-2',
        { 'lg:px-3': label !== undefined },
        {
          'max-md:hidden': visible === 'big-screens',
          'md:hidden': visible === 'small-screens',
        },
        'rounded-md',
        'select-none',
        {
          'opacity-30': !enabled,
          'hover:bg-black/10 active:bg-black/15':
            !active && !highlight && enabled,
          'bg-brand-500': active && !highlight,
          'hover:bg-brand-600 active:bg-brand-700':
            active && !highlight && enabled,
          'bg-brand-600': highlight,
          'hover:bg-brand-500 active:bg-brand-400': highlight && enabled,
          'dark:hover:bg-white/10 dark:active:bg-white/15':
            !active && !highlight && enabled,
          'dark:hover:bg-brand-600 dark:active:bg-brand-700':
            active && !highlight && enabled,
          'dark:bg-brand-100': highlight,
          'dark:hover:bg-brand-200 dark:active:bg-brand-300':
            highlight && enabled,
          'text-white': active && !highlight,
          'text-gray-800 dark:text-gray-100': !active && !highlight,
          'text-brand-50 dark:text-brand-900': highlight,
        },
      )}
      title={title}
      tabIndex={0}
      onClick={() => {
        if (!enabled) return
        action()
      }}
    >
      <span className="opacity-80">{icon}</span>

      {label && (
        <div
          className={classNames('text-sm font-semibold', {
            'hidden lg:block': labelVisible === 'big-screens',
          })}
        >
          {label}
        </div>
      )}
    </button>
  )
}
