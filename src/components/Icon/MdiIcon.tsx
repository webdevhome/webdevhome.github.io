import { Icon } from '@mdi/react'
import React, { memo } from 'react'

interface Props {
  path: string
  className?: string
  color?: string
}

export const MdiIcon = memo<Props>(function MdiIcon({ path, color }) {
  return <Icon style={{ width: 24, height: 24 }} path={path} color={color} />
})
