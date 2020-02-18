import React, { FC, memo } from 'react'
import { MdiIcon } from './MdiIcon'
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
      <MdiIcon path={icon} />
    </div>
  )
})
