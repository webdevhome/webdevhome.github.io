import { atom, readonlyType } from 'nanostores'
import type { SearchTarget } from '../links/links.ts'
import { onSiteSearchStore } from '../search/onSiteSearch.ts'
import { searchStore } from '../search/search.ts'
import type { StoreObject } from '../utils/nanostores.ts'

export type AppMode = 'default' | 'search' | 'customize'

export const $appMode = atom<AppMode>('default')

export const appModeStore = {
  appMode: readonlyType($appMode),

  set(mode: AppMode) {
    $appMode.set(mode)
  },

  toggle(modeA: AppMode, modeB: AppMode) {
    $appMode.set($appMode.get() === modeA ? modeB : modeA)
  },

  exitSearchMode() {
    $appMode.set('default')
    searchStore.setSearchTerm()
    onSiteSearchStore.setSearchTerm()
    onSiteSearchStore.setSearchTarget()
  },

  enterOnSiteSearchMode(target: SearchTarget) {
    onSiteSearchStore.setSearchTarget(target)
    $appMode.set('search')
  },

  exitOnSiteSearch() {
    onSiteSearchStore.setSearchTarget()
    onSiteSearchStore.setSearchTerm()
  },
} satisfies StoreObject
