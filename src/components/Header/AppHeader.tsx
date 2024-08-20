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
            'flex gap-x-1 justify-center flex-wrap',
            'py-2',
          )}
        >
          {actions}
        </div>
      ) : null}
    </div>
  )
}
