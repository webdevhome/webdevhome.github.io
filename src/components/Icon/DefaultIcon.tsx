import { mdiLinkVariant } from '@mdi/js'
import React, { memo } from 'react'
import { MdiIcon } from './MdiIcon'

export const DefaultIcon = memo(function DefaultIcon() {
  return (
    <div className="default-icon">
      <MdiIcon path={mdiLinkVariant} color="#eee" />
    </div>
  )
})
