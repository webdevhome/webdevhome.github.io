import React, { FC, memo } from 'react'
import { Icon } from '@mdi/react'
import { classes } from '../utils/jsx'

interface AppActionProps {
  icon: string
  active: boolean
  action(): void
}

export const AppAction: FC<AppActionProps> = memo(({
  icon, action, active
}) => {
  const actionClasses = {
    'app-action': true,
    'app-action--is-active': active
  }

  return (
    <div className={classes(actionClasses)} onClick={action}>
      <Icon path={icon} size={1} />
    </div>
  )
})
