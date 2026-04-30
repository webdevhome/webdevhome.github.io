import classNames from 'classnames'
import { type FC } from 'react'

type Props = {
  text: string
}

export const SearchDivider: FC<Props> = ({ text }) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-[1fr_auto_1fr] items-center gap-x-4',
        'my-4',
        'text-black/60 dark:text-white/60',
        'tracking-wide uppercase',
      )}
    >
      <div className="h-px bg-black/20 dark:bg-white/20" />
      {text}
      <div className="h-px bg-black/20 dark:bg-white/20" />
    </div>
  )
}
