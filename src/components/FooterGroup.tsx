import React, { memo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  title: string
}

export const FooterGroup = memo(function FooterGroup ({
  children, title
}: Props) {
  return (
    <div className="footer-group">
      <div className="footer-group__title">{title}</div>
      {children}
    </div>
  )
})
