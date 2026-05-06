import classNames from 'classnames'
import {
  type FC,
  type PropsWithChildren,
  type ReactElement,
  useRef,
} from 'react'
import {
  useShowJumpLinks,
  useShowJumpLinksMobile,
} from '../jump-links/useJumpLinks.ts'
import { useShowBackground } from '../settings/useBackgroundImage.ts'
import { useOnAppModeChanged, useIsAppMode } from './appMode.ts'
import { useFocusAppLayoutElements } from './useFocusAppLayoutElements.ts'

type Props = {
  header: ReactElement
  sidebar: ReactElement | null
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  header,
  sidebar,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const mainContentRef = useRef<HTMLDivElement>(null)

  const showBackground = useShowBackground()
  const showJumpLinks = useShowJumpLinks()
  const showJumpLinksMobile = useShowJumpLinksMobile()
  const isAppMode = useIsAppMode()

  const { focusMainElement } = useFocusAppLayoutElements({
    sidebarRef,
    mainContentRef,
  })

  useOnAppModeChanged((value) => {
    if (value === 'default') focusMainElement()
  })

  return (
    <div
      className={classNames(
        'fixed inset-0 p-2',
        'grid grid-cols-1 grid-rows-[auto_1fr] gap-2',
        {
          'md:grid-cols-[auto_1fr]': showJumpLinks,
          'md:grid-cols-1': !showJumpLinks,
        },
        'overflow-hidden',
        {
          'bg-[url(/assets/images/background-light.jpg)] bg-cover bg-center dark:bg-[url(/assets/images/background-dark.jpg)]':
            showBackground,
          'bg-gray-300 dark:bg-gray-800': !showBackground,
        },
      )}
    >
      <div className="md:col-span-2">{header}</div>

      <div
        className={classNames([
          'overflow-auto rounded-xl bg-white/30 max-md:contents dark:bg-white/5',
          'outline-none',
          'ring-black/30 focus-within:ring-1 dark:ring-white/30',
          {
            'max-md:hidden': !showJumpLinksMobile,
            'md:hidden': !showJumpLinks || isAppMode('search'),
          },
        ])}
        ref={sidebarRef}
        tabIndex={0}
      >
        {sidebar}
      </div>

      <div
        className={classNames([
          'overflow-auto rounded-xl bg-white/30 dark:bg-white/5',
          'outline-none',
          'ring-black/30 focus-within:ring-1 dark:ring-white/30',
          {
            'row-start-2 md:col-span-2': !showJumpLinks || isAppMode('search'),
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
