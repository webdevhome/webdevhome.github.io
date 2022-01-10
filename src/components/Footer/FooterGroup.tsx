import React, { FC } from 'react'
import './FooterGroup.scss'

interface FooterItem {
  label: string
  href?: string
}

interface Props {
  title: string
  items: FooterItem[]
}

export const FooterGroup: FC<Props> = ({ title, items }) => {
  return (
    <div className="footer-group">
      <div className="footer-group__title">{title}</div>
      {items.map((item) =>
        item.href !== undefined ? (
          <a
            href={item.href}
            className="footer-group__item footer-group__item--type-link"
          >
            {item.label}
          </a>
        ) : (
          <div className="footer-group__item footer-group__item--type-text">
            {item.label}
          </div>
        )
      )}
    </div>
  )
}
