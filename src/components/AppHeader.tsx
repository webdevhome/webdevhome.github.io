import React, { FC, memo } from 'react'

export const AppHeader: FC = memo(function AppHeader() {
  return (
    <div className="app-header">
      <div className="app-header__logo logo">
        <span className="logo__shape">&lt;</span>
        <span className="logo__char-1">Webdev</span>
        <span className="logo__char-2">Home</span>
        <span className="logo__shape"> /&gt;</span>
      </div>
    </div>
  )
})
