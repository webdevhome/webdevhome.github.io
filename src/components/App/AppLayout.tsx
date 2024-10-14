import classNames from 'classnames'
import { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { useToggleBackground } from './useToggleBackground'

type Props = {
  header: ReactElement
  sidebar: ReactNode
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  header,
  sidebar,
}) => {
  const toggleBackground = useToggleBackground()

  return (
    <div
      className={classNames(
        'fixed inset-0',
        'grid grid-cols-1 grid-rows-[auto,1fr]',
        'lg:grid-cols-[auto,1fr]',
        'overflow-hidden',
        {
          'bg-page-light dark:bg-page-dark bg-cover bg-center':
            toggleBackground.showBackground,
          'bg-white dark:bg-gray-800': !toggleBackground.showBackground,
        },
      )}
    >
      <div className="lg:col-span-2">{header}</div>
      <div className="overflow-auto">{sidebar}</div>
      <div className="overflow-auto" id="main-content">
        {children}
      </div>
    </div>
  )
}
