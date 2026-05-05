import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import { setOnSiteSearchTerm, setSearchTarget } from '../search/onSiteSearch.ts'
import { hasValidSearchTerm, setSearchTerm } from '../search/search.ts'

export type AppMode = 'default' | 'search' | 'customize'

const $appMode = atom<AppMode>('default')

export function setAppMode(mode: AppMode): void {
  $appMode.set(mode)
}

export function getCurrentAppMode(): AppMode {
  return $appMode.get()
}

export function useIsAppMode(): (...modes: AppMode[]) => boolean {
  const mode = useStore($appMode)

  return (...modes) => modes.includes(mode)
}

export function exitSearchMode(): void {
  $appMode.set('default')
  setSearchTerm()
  setOnSiteSearchTerm()
  setSearchTarget()
}

export function exitOnSiteSearch(): void {
  setSearchTarget()
  setOnSiteSearchTerm()
  if (!hasValidSearchTerm()) {
    $appMode.set('default')
  }
}
