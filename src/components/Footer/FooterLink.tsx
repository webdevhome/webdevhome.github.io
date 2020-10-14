import React, { memo } from 'react'
import './FooterLink.scss'

interface Props {
  text: string
  url: string
}

export const FooterLink = memo<Props>(function FooterLink({ text, url }) {
  return (
    <a href={url} className="footer-link">
      {text}
    </a>
  )
})
