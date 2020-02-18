import React, { FC, memo } from 'react'

interface FooterLinkProps {
  text: string
  url: string
}

export const FooterLink: FC<FooterLinkProps> = memo(({ text, url }) => {
  return (
    <a href={url} className="footer-link">{text}</a>
  )
})
