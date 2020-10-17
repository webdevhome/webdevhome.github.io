import React, { memo } from 'react'
import './Logo.scss'

export const Logo = memo(function Logo() {
  return (
    <div className="logo">
      <span className="logo__shape">&lt;</span>
      <span className="logo__char-1">Webdev</span>
      <span className="logo__char-2">Home</span>
      <span className="logo__shape"> /&gt;</span>
    </div>
  )
})
