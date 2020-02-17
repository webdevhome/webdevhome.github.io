import { mdiLinkVariant } from '@mdi/js'
import Icon from '@mdi/react'
import React, { FC, memo } from 'react'

export const DefaultIcon: FC = memo(() => {
  return (
    <div className="default-icon">
      <Icon path={mdiLinkVariant} size={1} color="#eee" />
    </div>
  )
})
