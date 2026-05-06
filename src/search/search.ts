import { useStore } from '@nanostores/react'
import { atom, computed } from 'nanostores'
import { $allLinksByVisibility } from '../links/hiddenUrls.ts'
import type { LinkItem } from '../links/links.ts'
import { getSearchResults } from './getSearchResults.ts'

//#region search term
export const $searchTerm = atom('')
export const useSearchTerm = () => useStore($searchTerm)

export function getSearchTerm(): string {
  return $searchTerm.get()
}

export function setSearchTerm(term: string = '') {
  $searchTerm.set(term)
}
//#endregion search term

//#region keyboard index
const $keyboardIndex = atom(0)

export function getKeyboardIndex(): number {
  return $keyboardIndex.get()
}

export function setKeyboardIndex(index: number) {
  $keyboardIndex.set(index)
}
//#endregion keyboard index

//#region computed
export const $visibleSearchResults = computed(
  [$searchTerm, $allLinksByVisibility],
  (searchTerm, linksByVisibility): Fuzzysort.KeyResults<LinkItem> => {
    return getSearchResults({
      searchTerm,
      links: linksByVisibility.visible,
      limit: 8,
    })
  },
)

export const $hiddenSearchResults = computed(
  [$searchTerm, $allLinksByVisibility],
  (searchTerm, linksByVisibility): Fuzzysort.KeyResults<LinkItem> => {
    return getSearchResults({
      searchTerm,
      links: linksByVisibility.hidden,
      limit: 2,
    })
  },
)

export const $focusedSearchResult = computed(
  [$visibleSearchResults, $hiddenSearchResults, $keyboardIndex],
  (
    visibleResults,
    hiddenResults,
    keyboardIndex,
  ): Fuzzysort.KeyResult<LinkItem> | null => {
    if (visibleResults !== null && keyboardIndex < visibleResults.length) {
      return visibleResults[keyboardIndex]
    }

    if (hiddenResults !== null) {
      return hiddenResults[keyboardIndex - (visibleResults?.length ?? 0)]
    }

    return null
  },
)
//#endregion computed
