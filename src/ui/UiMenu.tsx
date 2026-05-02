import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import classNames from 'classnames'
import { type FC, type PropsWithChildren, type ReactElement } from 'react'
import { UiActionButton } from './UiActionButton.tsx'

type Props = {
  icon: ReactElement
  label: string
}

export const UiMenu: FC<PropsWithChildren<Props>> = ({
  icon,
  label,
  children,
}) => {
  return (
    <Menu>
      <MenuButton className="cursor-default" tabIndex={-1} as="div">
        <UiActionButton icon={icon} label={label} />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className={classNames(
          'flex flex-col gap-y-1',
          'bg-white dark:bg-gray-800',
          'border border-gray-300 dark:border-gray-600',
          'rounded-md shadow-lg',
        )}
      >
        {children}
      </MenuItems>
    </Menu>
  )
}
