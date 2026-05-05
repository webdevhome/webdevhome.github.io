import { useStore } from '@nanostores/react'
import type { KeyboardEvent, KeyboardEventHandler } from 'react'
import { exitSearchMode, setAppMode } from '../app/appMode.ts'
import { linkHasSearchUrl } from '../links/links.ts'
import { isOpenLinksInNewTabEnabled } from '../links/useOpenLinksInNewTab.ts'
import {
  getOnSiteSearchTerm,
  getSearchTarget,
  setSearchTarget,
} from './onSiteSearch.ts'
import {
  $focusedSearchResult,
  $hiddenSearchResults,
  $visibleSearchResults,
  getKeyboardIndex,
  getSearchTerm,
  setKeyboardIndex,
} from './search.ts'

const maxResultsCount = 8
const maxHiddenResultsCount = 4

export function useHandleSearchInputKeydown(): (
  event: KeyboardEvent<HTMLInputElement>,
) => void {
  const visibleResults = useStore($visibleSearchResults)
  const hiddenResults = useStore($hiddenSearchResults)
  const focusedResult = useStore($focusedSearchResult)

  const keydownHandler: Record<
    string,
    KeyboardEventHandler<HTMLInputElement>
  > = {
    Backspace(event) {
      const searchTerm = getSearchTerm()
      const onSiteSearchTerm = getOnSiteSearchTerm()
      const searchTarget = getSearchTarget()

      if (searchTarget !== null && onSiteSearchTerm === '') {
        event.preventDefault()
        setSearchTarget()
        if (searchTerm === '') {
          setAppMode('default')
        }
      } else if (searchTerm === '' && onSiteSearchTerm === '') {
        event.preventDefault()
        setAppMode('default')
      }
    },

    Tab(event) {
      event.preventDefault()

      if (focusedResult === null) return
      if (!linkHasSearchUrl(focusedResult.obj)) return

      setSearchTarget(focusedResult.obj)
    },

    Enter(event) {
      const url = (() => {
        const searchTarget = getSearchTarget()
        if (searchTarget === null) {
          return focusedResult?.obj.url ?? null
        }

        const encodedSearchTerm = encodeURIComponent(getOnSiteSearchTerm())
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
      if (visibleResults === null) return

      event.preventDefault()

      setKeyboardIndex(Math.max(0, getKeyboardIndex() - 1))
    },

    ArrowDown(event) {
      if (visibleResults === null) return

      event.preventDefault()

      const resultsCount = Math.min(visibleResults.total, maxResultsCount)
      const hiddenResultsCount = Math.min(
        hiddenResults?.total ?? 0,
        maxHiddenResultsCount,
      )
      const totalResultsCount = resultsCount + hiddenResultsCount

      setKeyboardIndex(Math.min(totalResultsCount - 1, getKeyboardIndex() + 1))
    },
  }

  return (event) => {
    keydownHandler[event.key]?.(event)
  }
}
