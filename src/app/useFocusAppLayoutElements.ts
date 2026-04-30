import { useEffect, type RefObject } from 'react'

type Options = {
  sidebarRef: RefObject<HTMLDivElement | null>
  mainContentRef: RefObject<HTMLDivElement | null>
}

export function useFocusAppLayoutElements({
  sidebarRef,
  mainContentRef,
}: Options): void {
  // Automatically focus main content on app start.
  // That way the user can immediately scroll using the keyboard.
  useEffect(() => {
    mainContentRef.current?.focus()
  }, [mainContentRef])

  // Add keyboard shortcuts:
  // [alt/option] + [1] = focus sidebar
  // [alt/option] + [2] = focus main content
  useEffect(() => {
    /**
     * A mapping from `event.code` to an `HTMLElement` that should be focused,
     * when the according key is being pressed while holding `alt`/`option`.
     */
    const keyCodeToElementMap: Record<string, HTMLElement | null> = {
      Digit1: sidebarRef.current,
      Digit2: mainContentRef.current,
    }

    function handleKeydown(event: KeyboardEvent) {
      if (!event.altKey) return
      keyCodeToElementMap[event.code]?.focus()
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [mainContentRef, sidebarRef])
}
