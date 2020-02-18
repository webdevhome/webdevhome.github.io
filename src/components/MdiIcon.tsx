import { Icon } from '@mdi/react'
import React, { FC, memo } from 'react'

interface MdiIconProps {
  path: string
  className?: string
  color?: string
}

export const MdiIcon: FC<MdiIconProps> = memo(({ className, path, color }) => {
  const iconStyle = { width: 24, height: 24 }

  return (
    <Icon
      className={className}
      path={path}
      style={iconStyle}
      color={color}
    />
  )
})
