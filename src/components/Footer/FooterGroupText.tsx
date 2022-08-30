import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export const FooterGroupText: FC<PropsWithChildren<Props>> = ({
  className = '',
  children,
}) => {
  return (
    <div className={classNames('px-2 py-2 sm:mx-1', 'text-sm', className)}>
      {children}
    </div>
  )
}
