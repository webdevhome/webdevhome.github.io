import { useStore } from '@nanostores/react'
import fuzzy from 'fuzzysort'
import { atom, computed } from 'nanostores'
import { $allLinksByVisibility } from '../links/hiddenUrlsStore.ts'
import { type LinkItem, type SearchTarget } from '../links/links.ts'

export const maxResultsCount = 8
export const maxHiddenResultsCount = 4

export const $searchTerm = atom('')
export const $onSiteSearchTerm = atom('')
export const $searchTarget = atom<SearchTarget | null>(null)
export const $keyboardIndex = atom(0)

type GetSearchResultsOptions = {
  links: LinkItem[] | undefined
  searchTerm: string
  limit: number
}

function getSearchResults({
  links = [],
  searchTerm,
  limit,
}: GetSearchResultsOptions): Fuzzysort.KeyResults<LinkItem> {
  return fuzzy.go(searchTerm, links, { key: 'title', limit })
}

export const $visibleSearchResults = computed(
  [$searchTerm, $allLinksByVisibility],
  (searchTerm, linksByVisibility) => {
    return getSearchResults({
      searchTerm,
      links: linksByVisibility.visible,
      limit: 8,
    })
  },
)

export const $hiddenSearchResults = computed(
  [$searchTerm, $allLinksByVisibility],
  (searchTerm, linksByVisibility) => {
    return getSearchResults({
      searchTerm,
      links: linksByVisibility.hidden,
      limit: 2,
    })
  },
)

export function useSearchTerm(): string {
  return useStore($searchTerm)
}

export function setSearchTerm(term: string = ''): void {
  $searchTerm.set(term)
}

export function hasValidSearchTerm(): boolean {
  return $searchTerm.value.trim() !== ''
}

export function useOnSiteSearchTerm(): string {
  return useStore($onSiteSearchTerm)
}

export function setOnSiteSearchTerm(term: string = ''): void {
  $onSiteSearchTerm.set(term)
}

export function hasSearchTarget(): boolean {
  return $searchTarget.value !== null
}

export function setSearchTarget(target: SearchTarget | null = null): void {
  $searchTarget.set(target)
}

export function useSearchTarget(): SearchTarget | null {
  return useStore($searchTarget)
}

export const $focusedSearchResult = computed(
  [$visibleSearchResults, $hiddenSearchResults, $keyboardIndex],
  (visibleResults, hiddenResults, keyboardIndex) => {
    if (visibleResults !== null && keyboardIndex < visibleResults.length) {
      return visibleResults[keyboardIndex]
    }

    if (hiddenResults !== null) {
      return hiddenResults[keyboardIndex - (visibleResults?.length ?? 0)]
    }

    return null
  },
)
