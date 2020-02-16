import React, { FC, memo } from 'react'

interface LinkGroupProps {
  name: string
}

export const LinkGroup: FC<LinkGroupProps> = memo(({ children, name }) => {
  return (
    <div className="link-group">
      <div className="link-group__name">{name}</div>
      <div className="link-group__list">
        {children}
      </div>
    </div>
  )
})
