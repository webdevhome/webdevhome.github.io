import React, { memo } from 'react'
import './AppHeader.scss'
import { Logo } from './Logo'

export const AppHeader = memo(function AppHeader() {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <Logo />
      </div>
    </div>
  )
})
