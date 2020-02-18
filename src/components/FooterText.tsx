import React, { FC, memo } from 'react'

export const FooterText: FC = memo(({ children }) => {
  return (
    <div className="footer-text">
      {children}
    </div>
  )
})
