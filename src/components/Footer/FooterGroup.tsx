import React, { memo, PropsWithChildren } from 'react'
import './FooterGroup.scss'

interface Props {
  title: string
}

export const FooterGroup = memo<PropsWithChildren<Props>>(function FooterGroup({
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
