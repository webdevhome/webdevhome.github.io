import { useStore } from '@nanostores/react'
import type { KeyboardEvent } from 'react'
import { exitSearchMode, setAppMode } from '../app/appModeStore.ts'
import type { SearchTarget } from '../links/links.ts'
import { isOpenLinksInNewTabEnabled } from '../links/useOpenLinksInNewTab.ts'
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
  setKeyboardIndex,
  setSearchTarget,
} from './search.ts'

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
      if ($searchTarget.get() !== null && $onSiteSearchTerm.get() === '') {
        event.preventDefault()
        setSearchTarget()
        if ($searchTerm.get() === '') {
          setAppMode('default')
        }
      } else if ($searchTerm.get() === '' && $onSiteSearchTerm.get() === '') {
        event.preventDefault()
        setAppMode('default')
      }
    },

    Tab(event) {
      event.preventDefault()

      if ($searchTarget.get() !== null) return
      if (focusedResult === null) return
      if (focusedResult.obj.searchUrl === undefined) return

      setSearchTarget(focusedResult.obj as SearchTarget)
    },

    Enter(event) {
      const url = (() => {
        const searchTarget = $searchTarget.get()
        if (searchTarget === null) {
          return focusedResult?.obj.url ?? null
        }

        const encodedSearchTerm = encodeURIComponent($onSiteSearchTerm.get())
        return searchTarget.searchUrl.replaceAll('{search}', encodedSearchTerm)
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

      setKeyboardIndex(Math.max(0, $keyboardIndex.get() - 1))
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

      setKeyboardIndex(
        Math.min(totalResultsCount - 1, $keyboardIndex.get() + 1),
      )
    },
  }

  return (event) => {
    keydownHandler[event.key]?.(event)
  }
}
