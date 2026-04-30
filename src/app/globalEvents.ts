import { toggleJumpLinks } from '../jump-links/useJumpLinks.ts'
import { hasSearchTarget } from '../search/useSearch.ts'
import {
  appMode,
  exitOnSiteSearch,
  exitSearchMode,
  getCurrentAppMode,
  setAppMode,
  type AppMode,
} from './appModeStore.ts'

const keydownHandler: Record<AppMode, (event: KeyboardEvent) => void> = {
  [appMode.default](event) {
    if (event.altKey && event.code === 'KeyB') {
      toggleJumpLinks()
      return
    }

    if (event.altKey && event.code === 'KeyE') {
      setAppMode(appMode.customize)
      return
    }

    if (event.key === '\n') return
    if (event.key === ' ') return
    if (event.key.length !== 1) return
    if (event.ctrlKey) return
    if (event.altKey) return
    if (event.metaKey) return

    setAppMode(appMode.search)
  },

  [appMode.customize](event) {
    if (event.key === 'Escape') {
      setAppMode(appMode.default)
    }
  },

  [appMode.search](event) {
    if (event.key === 'Escape') {
      event.preventDefault()

      if (hasSearchTarget()) {
        exitOnSiteSearch()
      } else {
        exitSearchMode()
      }
    }
  },
}

export function registerGlobalEvents(): void {
  document.addEventListener('keydown', (event) => {
    const mode = getCurrentAppMode()
    keydownHandler[mode]?.(event)
  })
}
