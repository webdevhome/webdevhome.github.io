import { mdiLinkVariant } from '@mdi/js'
import React, { FC, memo } from 'react'
import { MdiIcon } from './MdiIcon'

export const DefaultIcon: FC = memo(() => {
  return (
    <div className="default-icon">
      <MdiIcon path={mdiLinkVariant} color="#eee" />
    </div>
  )
})
