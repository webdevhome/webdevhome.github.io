import React, { memo, useMemo } from 'react'
import { classes } from '../../utils/jsx'
import { MdiIcon } from '../Icon/MdiIcon'
import './AppAction.scss'

interface Props {
  icon: string
  active: boolean
  title?: string
  action: () => void
}

export const AppAction = memo<Props>(function AppAction({
  icon,
  active,
  title,
  action,
}) {
  const actionClasses = useMemo(
    () => ({
      'app-action': true,
      'app-action--is-active': active,
    }),
    [active]
  )

  return (
    <div className={classes(actionClasses)} onClick={action} title={title}>
      <MdiIcon path={icon} title={title} />
    </div>
  )
})
