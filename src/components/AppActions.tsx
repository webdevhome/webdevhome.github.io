import React, { FC, memo } from 'react'

export const AppActions: FC = memo(function AppActions({ children }) {
  return <div className="app-actions">{children}</div>
})
