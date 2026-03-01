import classNames from 'classnames'
import { FC, PropsWithChildren, ReactElement, useEffect, useRef } from 'react'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { useToggleBackground } from './useToggleBackground'
import { useToggleJumpLinks } from './useToggleJumpLinks'

type Props = {
  header: ReactElement
  sidebar: ReactElement
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  header,
  sidebar,
}) => {
  const mainContentRef = useRef<HTMLDivElement>(null)

  const toggleBackground = useToggleBackground()
  const toggleJumpLinks = useToggleJumpLinks()
  const isCurrentAppMode = useIsCurrentAppMode()

  useEffect(() => {
    mainContentRef.current?.focus()
  }, [])

  return (
    <div
      className={classNames(
        'fixed inset-0 p-2',
        'grid grid-cols-1 grid-rows-[auto,1fr] gap-2',
        {
          'md:grid-cols-[auto,1fr]': toggleJumpLinks.showJumpLinks,
          'md:grid-cols-1': !toggleJumpLinks.showJumpLinks,
        },
        'overflow-hidden',
        {
          'bg-page-light bg-cover bg-center dark:bg-page-dark':
            toggleBackground.showBackground,
          'bg-gray-200 dark:bg-gray-800': !toggleBackground.showBackground,
        },
      )}
    >
      <div className="md:col-span-2">{header}</div>

      <div
        className={classNames([
          'overflow-auto rounded-xl bg-white/30 dark:bg-white/5 max-md:contents',
          {
            'max-md:hidden': !toggleJumpLinks.showJumpLinksMobile,
            'md:hidden':
              !toggleJumpLinks.showJumpLinks ||
              isCurrentAppMode(AppMode.search),
          },
        ])}
      >
        {sidebar}
      </div>

      <div
        className={classNames([
          'overflow-auto rounded-xl bg-white/30 outline-none dark:bg-white/5',
          {
            'row-start-2 md:col-span-2':
              !toggleJumpLinks.showJumpLinks ||
              isCurrentAppMode(AppMode.search),
          },
        ])}
        id="main-content"
        ref={mainContentRef}
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  )
}
