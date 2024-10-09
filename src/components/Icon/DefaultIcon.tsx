import { mdiLinkVariant } from '@mdi/js'
import classNames from 'classnames'
import { FC } from 'react'
import { MdiIcon } from './MdiIcon'

export const DefaultIcon: FC = () => {
  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'text-gray-300',
        'h-[27px] w-[27px]',
      )}
    >
      <MdiIcon path={mdiLinkVariant} />
    </div>
  )
}
