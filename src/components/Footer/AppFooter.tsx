import React, { memo } from 'react'
import './AppFooter.scss'

export const AppFooter = memo(function AppFooter({ children }) {
  return <div className="app-footer">{children}</div>
})
