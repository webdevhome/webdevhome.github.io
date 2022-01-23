import classNames from 'classnames'
import React, { memo } from 'react'

export const Logo = memo(function Logo() {
  return (
    <div
      className={classNames(
        'font-mono text-2xl',
        'tracking-wide',
        'text-center md:text-left text-gray-400',
        'pt-2 md:pt-0',
      )}
    >
      <span>&lt;</span>
      <span className="text-brand-500">Webdev</span>
      <span className="text-brand-800">Home</span>
      <span> /&gt;</span>
    </div>
  )
})
