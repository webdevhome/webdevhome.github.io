import React, { FC, memo } from 'react'

export const AppFooter: FC = memo(function AppFooter({ children }) {
  return <div className="app-footer">{children}</div>
})
