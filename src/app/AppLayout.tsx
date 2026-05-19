import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import {
  type FC,
  type PropsWithChildren,
  type ReactElement,
  useRef,
} from 'react'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import { useOnAppModeChanged } from '../app-mode/useOnAppModeChanged.ts'
import { jumpLinksStore } from '../jump-links/jumpLinksStore.ts'
import { showBackgroundStore } from '../settings/useBackgroundImage.ts'
import { useMainContentScrollPosition } from '../utils/useScrollPosition.ts'
import { useFocusAppLayoutElements } from './useFocusAppLayoutElements.ts'

type Props = {
  header: ReactElement
  sidebar: ReactElement | null
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  header,
  sidebar,
  children,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const mainContentRef = useRef<HTMLDivElement>(null)

  const showBackground = useStore(showBackgroundStore.$show)
  const showJumpLinks = useStore(jumpLinksStore.$showJumpLinks)
  const showJumpLinksMobile = useStore(jumpLinksStore.$showJumpLinksMobile)

  const isAppMode = useIsAppMode()

  const { focusMainElement } = useFocusAppLayoutElements({
    sidebarRef,
    mainContentRef,
  })

  useMainContentScrollPosition(mainContentRef)

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
