import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import type { SearchTarget } from '../links/links.ts'

//#region on site search term
const $onSiteSearchTerm = atom('')
export const useOnSiteSearchTerm = () => useStore($onSiteSearchTerm)

export function getOnSiteSearchTerm(): string {
  return $onSiteSearchTerm.get()
}

export function setOnSiteSearchTerm(term: string = '') {
  $onSiteSearchTerm.set(term)
}
// #endregion on site search term

//#region search target
const $searchTarget = atom<SearchTarget | null>(null)
export const useSearchTarget = () => useStore($searchTarget)

export function getSearchTarget(): SearchTarget | null {
  return $searchTarget.get()
}

export function setSearchTarget(target: SearchTarget | null = null) {
  $searchTarget.set(target)
}

export function hasSearchTarget(): boolean {
  return $searchTarget.get() !== null
}
//#endregion search target
