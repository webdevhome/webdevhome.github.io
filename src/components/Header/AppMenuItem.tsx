import { MenuItem } from '@headlessui/react'
import classNames from 'classnames'
import { FC, ReactElement } from 'react'

type Props = {
  label: string
  icon: ReactElement
  selected?: boolean
  visible?: boolean
  action?: (() => void) | string
}

export const AppMenuItem: FC<Props> = ({
  label,
  icon,
  selected = false,
  visible = true,
  action = () => {},
}) => {
  const wrapperClassNames = classNames(
    'flex items-center',
    'mx-1 px-3 py-1 first:mt-1 last:mb-1',
    'rounded',
    'text-sm font-semibold',
    'dark:text-white',
    'select-none cursor-default',
    {
      'bg-brand-100 text-brand-700': selected,
      'dark:bg-brand-500 dark:text-brand-300': selected,
      'data-[focus]:bg-brand-200 data-[focus]:text-brand-800': selected,
      'dark:data-[focus]:bg-brand-400': selected,
      'data-[focus]:bg-gray-200 dark:data-[focus]:bg-gray-700': !selected,
      'active:bg-brand-300 active:data-[focus]:bg-brand-300 active:data-[focus]:text-brand-950':
        selected,
      'dark:active:bg-brand-600 dark:active:data-[focus]:bg-brand-600':
        selected,
      'active:bg-gray-300 active:data-[focus]:bg-gray-300': !selected,
      'dark:active:bg-gray-800 dark:active:data-[focus]:bg-gray-800': !selected,
    },
  )

  if (!visible) {
    return null
  }

  return (
    <MenuItem>
      {typeof action === 'function' ? (
        <div className={wrapperClassNames} onClick={action}>
          <div className="mr-2">
            {icon !== undefined ? icon : <div className="size-6"></div>}
          </div>

          {label}
        </div>
      ) : (
        <a className={wrapperClassNames} href={action}>
          <div className="mr-2">
            {icon !== undefined ? icon : <div className="size-6"></div>}
          </div>

          {label}
        </a>
      )}
    </MenuItem>
  )
}
