import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

interface Props {
  href: string
}

export const FooterGroupLink: FC<PropsWithChildren<Props>> = ({
  href,
  children,
}) => {
  return (
    <a
      className={classNames(
        'px-2 py-2 sm:mx-1',
        'text-sm',
        'text-brand-500 dark:text-brand-200',
        'hover:text-brand-600 hover:dark:text-brand-50',
        'hover:bg-gray-300 dark:hover:bg-gray-500',
        'rounded',
        'focus:outline outline-1 outline-gray-500 dark:outline-gray-300',
      )}
      href={href}
    >
      {children}
    </a>
  )
}
