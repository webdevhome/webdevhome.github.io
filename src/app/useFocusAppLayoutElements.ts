import { useEffect, type RefObject } from 'react'

type Options = {
  sidebarRef: RefObject<HTMLDivElement | null>
  mainContentRef: RefObject<HTMLDivElement | null>
}

type FocusAppLayoutElement = {
  focusMainElement: () => void
}

export function useFocusAppLayoutElements({
  sidebarRef,
  mainContentRef,
}: Options): FocusAppLayoutElement {
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

    addEventListener('keydown', handleKeydown)

    return () => {
      removeEventListener('keydown', handleKeydown)
    }
  }, [mainContentRef, sidebarRef])

  function focusMainElement() {
    mainContentRef.current?.focus()
  }

  return { focusMainElement }
}
