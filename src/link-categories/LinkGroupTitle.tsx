import classNames from 'classnames'
import { type FC, type PropsWithChildren } from 'react'
import type { TailwindColorName } from '../tailwindCss.ts'

type Props = {
  color: TailwindColorName | undefined
}

export const LinkGroupTitle: FC<PropsWithChildren<Props>> = ({
  color,
  children,
}) => {
  const finalColor: TailwindColorName = color ?? 'gray'

  return (
    <div
      className={classNames(
        'flex-auto',
        'px-4 py-2',
        `bg-${finalColor}-100 dark:bg-${finalColor}-600`,
        'text-center text-lg leading-tight font-medium tracking-wide',
        `text-${finalColor}-800 dark:text-${finalColor}-50`,
        'rounded-lg',
        'shadow-sm',
      )}
    >
      {children}
    </div>
  )
}
