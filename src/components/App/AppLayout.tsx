import classNames from 'classnames'
import { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'

type Props = {
  header: ReactElement
  sidebar: ReactNode
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  header,
  sidebar,
}) => {
  return (
    <div
      className={classNames(
        'fixed inset-0',
        'grid grid-cols-1 grid-rows-[auto,1fr]',
        'lg:grid-cols-[auto,1fr]',
        'overflow-hidden',
        'bg-white dark:bg-gray-700',
      )}
    >
      <div className="col-span-2">{header}</div>
      <div className="overflow-auto">{sidebar}</div>
      <div className="overflow-auto">{children}</div>
    </div>
  )
}
