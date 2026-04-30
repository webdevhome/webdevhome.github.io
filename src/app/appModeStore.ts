import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import {
  hasValidSearchTerm,
  setOnSiteSearchTerm,
  setSearchTarget,
  setSearchTerm,
} from '../search/useSearch.ts'
import type { ValuesOf } from '../utilityTypes.ts'

export const appMode = {
  default: 'default',
  search: 'search',
  customize: 'customize',
}

export type AppMode = ValuesOf<typeof appMode>

const $appMode = atom(appMode.default)

export function setAppMode(mode: AppMode): void {
  $appMode.set(mode)
}

export function getCurrentAppMode(): AppMode {
  return $appMode.value
}

export function useIsAppMode(): (...modes: AppMode[]) => boolean {
  const mode = useAtom($appMode)
  return (...modes) => modes.includes(mode)
}

export function exitSearchMode(): void {
  $appMode.set(appMode.default)
  setSearchTerm()
  setOnSiteSearchTerm()
  setSearchTarget()
}

export function exitOnSiteSearch(): void {
  setSearchTarget()
  setOnSiteSearchTerm()
  if (!hasValidSearchTerm()) {
    $appMode.set(appMode.default)
  }
}
