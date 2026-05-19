import { useEffect, useEffectEvent, useState, type RefObject } from 'react'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'

export function useMainContentScrollPosition(
  mainContentRef: RefObject<HTMLElement | null>,
) {
  const [mainContentScrollPosition, setMainContentScrollPosition] = useState(0)

  const isAppMode = useIsAppMode()

  // Set the scroll position depending on the app mode:
  // - "default" and "customize" modes use the stored scroll position
  // - "search" mode always start at scroll position `0`
  useEffect(() => {
    if (mainContentRef.current === null) return
    const element = mainContentRef.current

    element.scrollTop = isAppMode('default', 'customize')
      ? mainContentScrollPosition
      : 0
  }, [mainContentRef, isAppMode, mainContentScrollPosition])

  // Handle the scroll event of the main content element
  const handleScroll = useEffectEvent(() => {
    if (mainContentRef.current === null) return
    if (!isAppMode('default', 'customize')) return
    setMainContentScrollPosition(mainContentRef.current.scrollTop)
  })

  // Attach event handler for scrolling the main content element
  useEffect(() => {
    if (mainContentRef.current === null) return
    const element = mainContentRef.current

    element.addEventListener('scrollend', handleScroll)

    return () => {
      element.removeEventListener('scrollend', handleScroll)
    }
  }, [mainContentRef])
}
