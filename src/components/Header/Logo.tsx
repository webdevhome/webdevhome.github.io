import classNames from 'classnames'
import { FC } from 'react'

export const Logo: FC = () => {
  return (
    <div
      className={classNames(
        'font-mono text-2xl',
        'tracking-wide',
        'text-center md:text-left text-gray-400 dark:text-gray-200',
        'pt-2 md:pt-0',
      )}
    >
      <span>&lt;</span>
      <span className="text-brand-500 dark:text-brand-300">Webdev</span>
      <span className="text-brand-800 dark:text-brand-100">Home</span>
      <span> /&gt;</span>
    </div>
  )
}
