import React, { memo } from 'react'
import './AppContent.scss'

export const AppContent = memo(function AppContent({ children }) {
  return <div className="app-content">{children}</div>
})
