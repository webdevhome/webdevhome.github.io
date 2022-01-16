import React, { FC } from 'react'
import classNames from 'classnames'

export const AppFooter: FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center',
        'lg:flex-row',
        'px-4 py-2 sm:px-8 lg:px-12',
        'text-gray-700',
        'bg-gray-100',
        'border-t border-t-gray-300'
      )}
    >
      {children}
    </div>
  )
}
