import classNames from 'classnames'
import React, { FC } from 'react'
import { FooterGroupLink } from './FooterGroupLink'
import { FooterGroupText } from './FooterGroupText'

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
    <div className={classNames('flex items-center')}>
      <div className={classNames('px-4', 'font-semibold')}>
        {title}
      </div>

      {items.map((item, index) =>
        item.href !== undefined ? (
          <FooterGroupLink key={index} href={item.href}>
            {item.label}
          </FooterGroupLink>
        ) : (
          <FooterGroupText key={index}>{item.label}</FooterGroupText>
        )
      )}
    </div>
  )
}
