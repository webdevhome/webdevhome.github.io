import React, { FC, memo } from 'react'

interface Props {
  text: string
  url: string
}

export const FooterLink: FC<Props> = memo(function FooterLink({ text, url }) {
  return (
    <a href={url} className="footer-link">
      {text}
    </a>
  )
})
