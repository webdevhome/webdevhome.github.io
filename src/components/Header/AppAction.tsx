import classNames from 'classnames'
import React, { FC } from 'react'
import { MdiIcon } from '../Icon/MdiIcon'

interface Props {
  icon: string
  active?: boolean
  label?: string
  action: () => void
}

export const AppAction: FC<Props> = ({
  icon,
  active = false,
  label,
  action,
}) => {
  return (
    <div
      className={classNames(
        'flex items-center',
        'p-2',
        'hover:bg-gray-200 active:bg-gray-300',
        'dark:hover:bg-gray-600 dark:active:bg-gray-500',
        'rounded-md',
        'select-none',
        {
          'bg-brand-500 hover:bg-brand-600 active:bg-brand-700': active,
          'dark:hover:bg-brand-600 dark:active:bg-brand-700': active,
          'text-white': active,
          'text-gray-800 dark:text-gray-100': !active,
        },
      )}
      onClick={action}
    >
      <MdiIcon path={icon} />

      <div className="ml-2 text-sm font-semibold tracking-wide">{label}</div>
    </div>
  )
}
