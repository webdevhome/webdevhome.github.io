import { type RefObject, useEffect } from 'react'

export function useAutoFocusSearchInput(
  searchInputRef: RefObject<HTMLInputElement | null>,
) {
  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }, [searchInputRef])

  useEffect(() => {
    function handleGlobalKeydown(event: globalThis.KeyboardEvent) {
      if (event.key.length !== 1) return
      if (searchInputRef.current === document.activeElement) return
      searchInputRef.current?.focus()
    }

    addEventListener('keydown', handleGlobalKeydown)

    return () => {
      removeEventListener('keydown', handleGlobalKeydown)
    }
  }, [searchInputRef])
}
