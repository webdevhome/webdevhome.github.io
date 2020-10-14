import React, { memo, useMemo } from 'react'
import { classes } from '../../utils/jsx'
import { MdiIcon } from '../Icon/MdiIcon'
import './AppAction.scss'

interface Props {
  icon: string
  active: boolean
  action: () => void
}

export const AppAction = memo<Props>(function AppAction({
  icon,
  action,
  active,
}) {
  const actionClasses = useMemo(
    () => ({
      'app-action': true,
      'app-action--is-active': active,
    }),
    [active]
  )

  return (
    <div className={classes(actionClasses)} onClick={action}>
      <MdiIcon path={icon} />
    </div>
  )
})
