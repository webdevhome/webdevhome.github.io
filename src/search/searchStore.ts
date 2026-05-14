import { atom, computed, readonlyType } from 'nanostores'
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import type { LinkItem } from '../links/links.ts'
import type { StoreObject } from '../utils/nanostores.ts'
import { getSearchResults } from './getSearchResults.ts'

const maxResultsCount = 8
const maxHiddenResultsCount = 4

const $searchTerm = atom('')
const $keyboardIndex = atom(0)

const $visibleResults = computed(
  [$searchTerm, hiddenLinksStore.$visibleLinks],
  (searchTerm, visibleLinks): Fuzzysort.KeyResults<LinkItem> => {
    const links = Array.from(visibleLinks)
    return getSearchResults({ searchTerm, links, limit: maxResultsCount })
  },
)

const $hiddenResults = computed(
  [$searchTerm, hiddenLinksStore.$hiddenLinks],
  (searchTerm, hiddenLinks): Fuzzysort.KeyResults<LinkItem> => {
    const links = Array.from(hiddenLinks)
    return getSearchResults({ searchTerm, links, limit: maxHiddenResultsCount })
  },
)

const $focusedResult = computed(
  [$visibleResults, $hiddenResults, $keyboardIndex],
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

export const searchStore = {
  $searchTerm: readonlyType($searchTerm),
  $keyboardIndex: readonlyType($keyboardIndex),

  $visibleResults,
  $hiddenResults,
  $focusedResult,

  setSearchTerm(term: string = '') {
    $searchTerm.set(term)
  },

  setKeyboardIndex(index: number) {
    $keyboardIndex.set(index)
  },

  incrementKeyboardIndex() {
    const visibleResults = $visibleResults.get()
    const hiddenResults = $hiddenResults.get()

    const resultsCount = Math.min(visibleResults.total, maxResultsCount)

    const hiddenResultsCount = Math.min(
      hiddenResults?.total ?? 0,
      maxHiddenResultsCount,
    )

    const totalResultsCount = resultsCount + hiddenResultsCount
    const nextIndex = Math.min(totalResultsCount - 1, $keyboardIndex.get() + 1)
    if (nextIndex === -1) return

    $keyboardIndex.set(nextIndex)
  },

  decrementKeyboardIndex() {
    const nextIndex = Math.max(0, $keyboardIndex.get() - 1)
    if (nextIndex === -1) return

    $keyboardIndex.set(nextIndex)
  },
} satisfies StoreObject
