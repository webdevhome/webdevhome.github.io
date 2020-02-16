import React, { FC, memo } from 'react'

export const AppContent: FC = memo(({ children }) => {
  return (
    <div className="app-content">
      {children}
    </div>
  )
})
