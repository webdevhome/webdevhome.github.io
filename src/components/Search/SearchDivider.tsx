import classNames from 'classnames'
import { FC } from 'react'

interface Props {
  text: string
}

export const SearchDivider: FC<Props> = ({ text }) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-[1fr,auto,1fr] items-center gap-x-4',
        'my-4',
        'text-gray-500',
        'uppercase tracking-wide',
      )}
    >
      <div className="h-px bg-gray-400" />
      {text}
      <div className="h-px bg-gray-400" />
    </div>
  )
}
