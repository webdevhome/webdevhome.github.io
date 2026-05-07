import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import { useEffect } from 'react'
import { setOnSiteSearchTerm, setSearchTarget } from '../search/onSiteSearch.ts'
import { setSearchTerm } from '../search/search.ts'
import type { SearchTarget } from '../links/links.ts'

export type AppMode = 'default' | 'search' | 'customize'

const $appMode = atom<AppMode>('default')

export function setAppMode(mode: AppMode) {
  $appMode.set(mode)
}

export function toggleAppMode(modeA: AppMode, modeB: AppMode) {
  $appMode.set($appMode.get() === modeA ? modeB : modeA)
}

export function getCurrentAppMode(): AppMode {
  return $appMode.get()
}

export function useIsAppMode(): (...modes: AppMode[]) => boolean {
  const mode = useStore($appMode)

  return (...modes) => modes.includes(mode)
}

export function exitSearchMode() {
  $appMode.set('default')
  setSearchTerm()
  setOnSiteSearchTerm()
  setSearchTarget()
}

export function enterOnSiteSearchMode(target: SearchTarget) {
  setSearchTarget(target)
  $appMode.set('search')
}

export function exitOnSiteSearch() {
  setSearchTarget()
  setOnSiteSearchTerm()
}

export function useOnAppModeChanged(
  callback: (value: AppMode, oldValue: AppMode) => void,
) {
  useEffect(() => $appMode.listen(callback), [callback])
}
