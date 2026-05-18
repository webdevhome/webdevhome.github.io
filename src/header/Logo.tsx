import classNames from 'classnames'
import { type FC } from 'react'
import { appConfig } from '../app/appConfig.ts'

export const Logo: FC = () => {
  return (
    <div
      className={classNames(
        'text-lg font-semibold tracking-wide text-nowrap select-none',
        'bg-cover bg-clip-text text-transparent',
        'bg-[linear-gradient(70deg_in_oklch_decreasing_hue,oklch(0.4_0.18_240),oklch(0.4_0.18_40))]',
        'dark:bg-[linear-gradient(70deg_in_oklch_decreasing_hue,oklch(0.75_0.1_240),oklch(0.75_0.1_40))]',
      )}
    >
      {appConfig.appTitle}
    </div>
  )
}
