import classNames from 'classnames'
import { FC } from 'react'

export const FooterGroupText: FC = ({ children }) => {
  return <div className={classNames('px-2 py-1 mx-1')}>{children}</div>
}
