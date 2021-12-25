import React, { FC, ReactElement } from 'react'
import './AppHeader.scss'
import { Logo } from './Logo'

interface Props {
  actions?: ReactElement | null
}

export const AppHeader: FC<Props> = ({ actions }) => {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <Logo />
      </div>

      {actions !== null ? (
        <div className="app-header__actions">{actions}</div>
      ) : null}
    </div>
  )
}
