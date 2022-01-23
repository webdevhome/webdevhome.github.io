import classNames from 'classnames'
import React, { memo } from 'react'
import { MdiIcon } from '../Icon/MdiIcon'

interface Props {
  icon: string
  active: boolean
  label?: string
  action: () => void
}

export const AppAction = memo<Props>(function AppAction({
  icon,
  active,
  label,
  action,
}) {
  return (
    <div
      className={classNames(
        'flex items-center',
        'p-2',
        'hover:bg-gray-200 active:bg-gray-300',
        'rounded-md',
        'select-none',
        {
          'bg-brand-500 hover:bg-brand-700 active:bg-brand-800': active,
          'text-white': active,
          'text-gray-800': !active,
        },
      )}
      onClick={action}
    >
      <MdiIcon path={icon} />

      <div className="ml-2 text-sm font-semibold tracking-wide">{label}</div>
    </div>
  )
})
