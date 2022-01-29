import { mdiLinkVariant } from '@mdi/js'
import classNames from 'classnames'
import React, { FC } from 'react'
import { MdiIcon } from './MdiIcon'

export const DefaultIcon: FC = () => {
  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'text-gray-300',
        'w-[27px] h-[27px]',
      )}
    >
      <MdiIcon path={mdiLinkVariant} />
    </div>
  )
}
