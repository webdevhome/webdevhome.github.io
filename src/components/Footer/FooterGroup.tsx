import React, { memo, ReactNode } from 'react'
import './FooterGroup.scss'

interface Props {
  children?: ReactNode
  title: string
}

export const FooterGroup = memo<Props>(function FooterGroup({
  children,
  title,
}) {
  return (
    <div className="footer-group">
      <div className="footer-group__title">{title}</div>
      {children}
    </div>
  )
})
