import classNames from 'classnames'
import React, { FC, ReactElement } from 'react'
import { Logo } from './Logo'

interface Props {
  actions?: ReactElement | null
}

export const AppHeader: FC<Props> = ({ actions }) => {
  return (
    <div
      className={classNames(
        'grid items-center',
        'grid-rows-[auto,auto] md:grid-rows-[auto] md:grid-cols-[1fr,auto]',
        'px-page',
      )}
    >
      <Logo />

      {actions !== null ? (
        <div
          className={classNames(
            'flex gap-x-2 justify-center flex-wrap',
            'py-2',
          )}
        >
          {actions}
        </div>
      ) : null}
    </div>
  )
}
