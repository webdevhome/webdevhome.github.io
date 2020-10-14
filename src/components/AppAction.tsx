import React, { FC, memo, useMemo } from 'react'
import { classes } from '../utils/jsx'
import { MdiIcon } from './MdiIcon'

interface Props {
  icon: string
  active: boolean
  action: () => void
}

export const AppAction: FC<Props> = memo(function AppAction({
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
