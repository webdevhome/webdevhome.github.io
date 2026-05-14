import { atom } from 'nanostores'
import { appModeStore, type AppMode } from '../app-mode/appModeStore.ts'
import { jumpLinksStore } from '../jump-links/jumpLinksStore.ts'
import { onSiteSearchStore } from '../search/onSiteSearch.ts'
import { type StoreObject } from '../utils/nanostores.ts'

const $enableGlobalEvents = atom(true)

export const globalEventsStore = {
  setEnableEvents(value: boolean) {
    $enableGlobalEvents.set(value)
  },
} satisfies StoreObject

const keydownHandler: Record<AppMode, (event: KeyboardEvent) => void> = {
  default(event) {
    if (event.altKey && event.code === 'KeyB') {
      jumpLinksStore.toggleJumpLinks()
      return
    }

    if (event.altKey && event.code === 'KeyE') {
      appModeStore.setMode('customize')
      return
    }

    if (event.key === '\n') return
    if (event.key === ' ') return
    if (event.key.length !== 1) return
    if (event.ctrlKey) return
    if (event.altKey) return
    if (event.metaKey) return

    appModeStore.enterSearchMode(event.key)
  },

  customize(event) {
    if (event.key === 'Escape') {
      appModeStore.setMode('default')
    }
  },

  search(event) {
    if (event.key === 'Escape') {
      event.preventDefault()

      const hasSearchTarget = onSiteSearchStore.$searchTarget.get() !== null

      if (hasSearchTarget) {
        appModeStore.exitOnSiteSearch()
      } else {
        appModeStore.exitSearchMode()
      }
    }
  },
}

export function registerGlobalEvents() {
  addEventListener('keydown', (event) => {
    if (!$enableGlobalEvents.get()) return
    const mode = appModeStore.$appMode.get()
    keydownHandler[mode]?.(event)
  })
}
