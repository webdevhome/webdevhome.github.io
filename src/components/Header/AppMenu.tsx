import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { AppAction } from './AppAction'

type Props = {
  icon: string
  label: string
}

export const AppMenu: FC<PropsWithChildren<Props>> = ({
  icon,
  label,
  children,
}) => {
  return (
    <Menu>
      <MenuButton className="cursor-default" tabIndex={-1}>
        <AppAction icon={icon} label={label} />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className={classNames(
          'flex flex-col gap-y-px',
          'p-1',
          'bg-white dark:bg-gray-600',
          'border border-gray-300 dark:border-gray-400',
          'rounded-md',
        )}
      >
        {children}
      </MenuItems>
    </Menu>
  )
}
