import classNames from 'classnames'
import { type FC } from 'react'
import { appConfig } from '../app/appConfig.ts'

export const Logo: FC = () => {
  return (
    <div
      className={classNames(
        'text-lg font-semibold tracking-wide text-nowrap select-none',
        'bg-cover bg-clip-text text-transparent',
        'bg-[linear-gradient(70deg_in_oklch,oklch(0.4_0.14_240),oklch(0.45_0.12_200),oklch(0.5_0.12_100),oklch(0.45_0.1_340))]',
        'dark:bg-[linear-gradient(70deg_in_oklch,oklch(0.9_0.1_240),oklch(0.95_0.1_200),oklch(0.95_0.1_100),oklch(0.85_0.1_340))]',
      )}
    >
      {appConfig.appTitle}
    </div>
  )
}
