import classNames from 'classnames'
import { FC } from 'react'
import { MdiIcon } from '../Icon/MdiIcon'

interface Props {
  icon: string
  active?: boolean
  highlight?: boolean
  label?: string
  action: () => void
}

export const AppAction: FC<Props> = ({
  icon,
  active = false,
  highlight = false,
  label,
  action,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center md:flex-row',
        'p-2',
        'rounded-md',
        'select-none',
        {
          'hover:bg-gray-300 active:bg-gray-400': !active && !highlight,
          'bg-brand-500 hover:bg-brand-600 active:bg-brand-700':
            active && !highlight,
          'bg-brand-500/15 hover:bg-brand-500/25 active:bg-brand-500/35': highlight,
          'dark:hover:bg-gray-600 dark:active:bg-gray-500':
            !active && !highlight,
          'dark:hover:bg-brand-600 dark:active:bg-brand-700':
            active && !highlight,
          'dark:bg-white/10 dark:hover:bg-white/20 dark:active:bg-white/30':
            highlight,
          'text-white': active && !highlight,
          'text-gray-800 dark:text-gray-100': !active && !highlight,
          'text-brand-600 dark:text-brand-300': highlight,
        },
      )}
      onClick={action}
    >
      <MdiIcon path={icon} />

      <div className="md:ml-2 text-xs md:text-sm font-semibold">{label}</div>
    </div>
  )
}
