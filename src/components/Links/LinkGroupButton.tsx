import classNames from 'classnames'
import { FC } from 'react'

interface Props {
  onClick?: () => void
}

export const LinkGroupButton: FC<Props> = ({ children, onClick }) => {
  return (
    <div
      className={classNames(
        'justify-self-center',
        'font-semibold text-gray-700 text-sm',
        'tracking-wide',
        'my-2 px-4 py-1',
        'border border-gray-300 hover:border-gray-400',
        'hover:bg-gray-200 active:bg-gray-300',
        'rounded',
        'select-none',
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
