import { Icon } from '@mdi/react'
import React, { FC, memo, useMemo } from 'react'

interface Props {
  path: string
  className?: string
  color?: string
}

export const MdiIcon: FC<Props> = memo(({ className, path, color }) => {
  const iconStyle = useMemo(() => ({ width: 24, height: 24 }), [])

  return (
    <Icon className={className} path={path} style={iconStyle} color={color} />
  )
})
