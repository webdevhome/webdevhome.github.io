import classNames from 'classnames'
import { FC } from 'react'

interface Props {
  href: string
}

export const FooterGroupLink: FC<Props> = ({ href, children }) => {
  return (
    <a
      className={classNames(
        'px-2 py-2 sm:mx-1',
        'text-sm',
        'hover:bg-gray-300',
        'rounded',
        'focus:outline outline-1 outline-gray-500'
      )}
      href={href}
    >
      {children}
    </a>
  )
}
