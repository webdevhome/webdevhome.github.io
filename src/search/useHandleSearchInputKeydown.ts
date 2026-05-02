import { useStore } from '@nanostores/react'
import type { KeyboardEvent } from 'react'
import { exitSearchMode, setAppMode } from '../app/appModeStore.ts'
import type { SearchTarget } from '../links/links.ts'
import { isOpenLinksInNewTabEnabled } from '../links/useOpenLinksInNewTab.ts'
import { getOnSiteSearchUrl } from './getOnSiteSearchUrl.ts'
import {
  $focusedSearchResult,
  $hiddenSearchResults,
  $keyboardIndex,
  $onSiteSearchTerm,
  $searchTarget,
  $searchTerm,
  $visibleSearchResults,
  maxHiddenResultsCount,
  maxResultsCount,
} from './useSearch.ts'

export function useHandleSearchInputKeydown(): (
  event: KeyboardEvent<HTMLInputElement>,
) => void {
  const results = useStore($visibleSearchResults)
  const hiddenResults = useStore($hiddenSearchResults)
  const focusedResult = useStore($focusedSearchResult)

  const keydownHandler: Record<
    string,
    (event: KeyboardEvent<HTMLInputElement>) => void
  > = {
    Backspace(event) {
      if ($searchTarget.value !== null && $onSiteSearchTerm.value === '') {
        event.preventDefault()
        $searchTarget.set(null)
        if ($searchTerm.value === '') {
          setAppMode('default')
        }
      } else if ($searchTerm.value === '' && $onSiteSearchTerm.value === '') {
        event.preventDefault()
        setAppMode('default')
      }
    },

    Tab(event) {
      event.preventDefault()

      if ($searchTarget.value !== null) return
      if (focusedResult === null) return
      if (focusedResult.obj.searchUrl === undefined) return

      $searchTarget.set(focusedResult.obj as SearchTarget)
    },

    Enter(event) {
      const url = (() => {
        if ($searchTarget.value === null) {
          return focusedResult?.obj.url ?? null
        }
        return getOnSiteSearchUrl($searchTarget.value, $onSiteSearchTerm.value)
      })()

      if (url === null) return

      if (event.ctrlKey || isOpenLinksInNewTabEnabled()) {
        open(url, '')
        exitSearchMode()
      } else {
        location.href = url
      }
    },

    ArrowUp(event) {
      if (results === null) return

      event.preventDefault()

      $keyboardIndex.set(Math.max(0, $keyboardIndex.get() - 1))
    },

    ArrowDown(event) {
      if (results === null) return

      event.preventDefault()

      const resultsCount = Math.min(results.total, maxResultsCount)
      const hiddenResultsCount = Math.min(
        hiddenResults?.total ?? 0,
        maxHiddenResultsCount,
      )
      const totalResultsCount = resultsCount + hiddenResultsCount

      $keyboardIndex.set(
        Math.min(totalResultsCount - 1, $keyboardIndex.get() + 1),
      )
    },
  }

  return (event) => {
    keydownHandler[event.key]?.(event)
  }
}
