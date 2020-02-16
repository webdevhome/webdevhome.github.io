import React, { FC, memo } from 'react'
import { Icon } from '@mdi/react'

interface AppActionProps {
  icon: string
  action(): void
}

export const AppAction: FC<AppActionProps> = memo(({
  icon, action
}) => {
  return (
    <div className="app-action" onClick={action}>
      <Icon path={icon} size={1} />
    </div>
  )
})
