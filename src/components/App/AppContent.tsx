import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

export const AppContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))]',
        'gap-x-2 sm:gap-x-4 lg:gap-x-8 gap-y-8',
        'px-page py-4 lg:py-8',
      )}
    >
      {children}
    </div>
  )
}
