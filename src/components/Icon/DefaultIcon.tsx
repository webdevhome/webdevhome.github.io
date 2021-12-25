import { mdiLinkVariant } from '@mdi/js'
import React, { memo } from 'react'
import { MdiIcon } from './MdiIcon'
import './DefaultIcon.scss'

export const DefaultIcon = memo(function DefaultIcon() {
  return (
    <div className="default-icon">
      <MdiIcon path={mdiLinkVariant} color="#ccc" />
    </div>
  )
})
