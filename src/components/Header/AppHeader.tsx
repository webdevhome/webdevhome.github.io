import classNames from 'classnames'
import { FC, ReactElement } from 'react'
import { Logo } from './Logo'

interface Props {
  actions?: ReactElement | null
}

export const AppHeader: FC<Props> = ({ actions }) => {
  return (
    <div
      className={classNames(
        'grid items-center',
        'grid-cols-[1fr,auto]',
        'px-page',
      )}
    >
      <Logo />

      {actions !== null ? (
        <div
          className={classNames(
            'flex flex-wrap justify-center gap-x-1',
            'py-2',
          )}
        >
          {actions}
        </div>
      ) : null}
    </div>
  )
}
