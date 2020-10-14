import React, { memo } from 'react'
import './AppActions.scss'

export const AppActions = memo(function AppActions({ children }) {
  return <div className="app-actions">{children}</div>
})
