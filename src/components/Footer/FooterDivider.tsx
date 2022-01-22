import classNames from 'classnames'
import React, { FC } from 'react'

export const FooterDivider: FC = () => {
  return (
    <div
      className={classNames(
        'w-1/6 h-px',
        'lg:w-px lg:h-6',
        'mx-auto my-4',
        'lg:mx-4 lg:my-0',
        'bg-gray-300'
      )}
    />
  )
}
