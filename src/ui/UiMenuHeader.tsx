import { MenuHeading } from '@headlessui/react'
import classNames from 'classnames'
import { type FC } from 'react'

type Props = {
  title: string
}

export const UiMenuHeader: FC<Props> = ({ title }) => {
  return (
    <MenuHeading
      className={classNames(
        'mt-4 px-3 text-xs uppercase',
        'text-gray-500 dark:text-gray-400',
        'font-bold tracking-widest',
        'select-none',
      )}
    >
      {title}
    </MenuHeading>
  )
}
