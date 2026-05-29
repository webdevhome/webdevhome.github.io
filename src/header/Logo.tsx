import classNames from 'classnames'
import { type FC } from 'react'
import { appConfig } from '../app/appConfig.ts'

export const Logo: FC = () => {
  return (
    <div
      className={classNames(
        'text-lg font-semibold tracking-wide text-nowrap select-none',
        'bg-cover bg-clip-text text-transparent',
        'bg-[linear-gradient(70deg_in_oklch,oklch(0.47_0.16_190),oklch(0.45_0.16_260))]',
        'dark:bg-[linear-gradient(70deg_in_oklch,oklch(0.7_0.17_190),oklch(0.7_0.17_260))]',
      )}
    >
      {appConfig.appTitle}
    </div>
  )
}
