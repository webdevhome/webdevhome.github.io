import { atom, readonlyType } from 'nanostores'
import type { SearchTarget } from '../links/links.ts'
import { onSiteSearchStore } from '../search/onSiteSearch.ts'
import { searchStore } from '../search/searchStore.ts'
import type { StoreObject } from '../utils/nanostores.ts'

export type AppMode = 'default' | 'search' | 'customize'

const $appMode = atom<AppMode>('default')

export const appModeStore = {
  $appMode: readonlyType($appMode),

  setMode(mode: AppMode) {
    $appMode.set(mode)
  },

  toggleMode(modeA: AppMode, modeB: AppMode) {
    $appMode.set($appMode.get() === modeA ? modeB : modeA)
  },

  enterSearchMode(firstCharacter: string) {
    $appMode.set('search')
    searchStore.setSearchTerm(firstCharacter)
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
