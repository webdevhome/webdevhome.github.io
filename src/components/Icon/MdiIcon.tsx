import { Icon } from '@mdi/react'
import React, { FC } from 'react'

interface Props {
  path: string
  color?: string
  title?: string
}

export const MdiIcon: FC<Props> = ({ path, color, title = '' }) => {
  return (
    <Icon
      style={{ width: 24, height: 24 }}
      path={path}
      color={color}
      title={title}
    />
  )
}
