import classNames from 'classnames'
import { FC, PropsWithChildren, ReactElement } from 'react'
import { useToggleBackground } from './useToggleBackground'

type Props = {
  header: ReactElement
  sidebar: ReactElement
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
        'grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]',
        'overflow-hidden',
        {
          'bg-page-light bg-cover bg-center dark:bg-page-dark':
            toggleBackground.showBackground,
          'bg-white dark:bg-gray-800': !toggleBackground.showBackground,
        },
      )}
    >
      <div className="col-span-2">{header}</div>
      <div className="overflow-auto">{sidebar}</div>
      <div className="overflow-auto" id="main-content">
        {children}
      </div>
    </div>
  )
}
