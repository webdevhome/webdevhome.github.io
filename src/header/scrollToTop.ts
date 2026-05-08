import { useEffect, useState } from 'react'

export function scrollToTop() {
  const mainContentElement = document.getElementById('main-content')
  if (mainContentElement === null) return

  mainContentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

export function useIsScrolledToTop(): boolean {
  const [scrollTop, setScrollTop] = useState<number>(() => {
    const mainContentElement = document.getElementById('main-content')
    return mainContentElement?.scrollTop ?? 0
  })

  const isScrolledToTop = scrollTop === 0

  function handleScrollend(event: Event): void {
    if (!(event.target instanceof HTMLElement)) return
    setScrollTop(event.target.scrollTop)
  }

  useEffect(() => {
    const mainContentElement = document.getElementById('main-content')
    if (mainContentElement === null) return
    mainContentElement.addEventListener('scrollend', handleScrollend)

    return () => {
      mainContentElement.removeEventListener('scrollend', handleScrollend)
    }
  }, [])

  return isScrolledToTop
}
