import { MenuHeading } from '@headlessui/react'
import classNames from 'classnames'
import { FC } from 'react'

type Props = {
  title: string
}

export const AppMenuHeader: FC<Props> = ({ title }) => {
  return (
    <MenuHeading
      className={classNames(
        'mt-4 mb-1.5 px-3 text-xs uppercase ',
        'text-gray-500 dark:text-gray-300',
        'font-bold',
        'select-none',
      )}
    >
      {title}
    </MenuHeading>
  )
}
