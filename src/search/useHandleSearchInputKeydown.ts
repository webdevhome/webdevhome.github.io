import { useStore } from '@nanostores/react'
import type { KeyboardEvent, KeyboardEventHandler } from 'react'
import { appModeStore } from '../app-mode/appModeStore.ts'
import { linkIsSearchTarget } from '../links/links.ts'
import { openLinksInNewTabStore } from '../links/openLinksInNewTab.ts'
import { onSiteSearchStore } from './onSiteSearch.ts'
import { searchStore } from './search.ts'

export function useHandleSearchInputKeydown(): (
  event: KeyboardEvent<HTMLInputElement>,
) => void {
  const visibleResults = useStore(searchStore.$visibleResults)
  const focusedResult = useStore(searchStore.$focusedResult)

  const keydownHandler: Record<
    string,
    KeyboardEventHandler<HTMLInputElement>
  > = {
    Backspace(event) {
      const searchTerm = searchStore.$searchTerm.get()
      const onSiteSearchTerm = onSiteSearchStore.$searchTerm.get()
      const searchTarget = onSiteSearchStore.$searchTarget.get()

      if (searchTarget !== null && onSiteSearchTerm === '') {
        event.preventDefault()
        appModeStore.exitOnSiteSearch()
      } else if (searchTerm === '' && onSiteSearchTerm === '') {
        event.preventDefault()
        appModeStore.exitSearchMode()
      }
    },

    Tab(event) {
      event.preventDefault()

      if (focusedResult === null) return
      if (!linkIsSearchTarget(focusedResult.obj)) return

      onSiteSearchStore.setSearchTarget(focusedResult.obj)
    },

    Enter(event) {
      const url = (() => {
        const searchTarget = onSiteSearchStore.$searchTarget.get()
        if (searchTarget === null) {
          return focusedResult?.obj.url ?? null
        }

        const onSiteSearchTerm = onSiteSearchStore.$searchTerm.get()
        const encodedSearchTerm = encodeURIComponent(onSiteSearchTerm)
        return searchTarget.searchUrl.replaceAll('{search}', encodedSearchTerm)
      })()

      if (url === null) return

      const openInNewTabs = openLinksInNewTabStore.$setting.get()

      if (event.ctrlKey || openInNewTabs) {
        open(url, '')
        appModeStore.exitSearchMode()
      } else {
        location.href = url
      }
    },

    ArrowUp(event) {
      if (visibleResults === null) return
      event.preventDefault()
      searchStore.decrementKeyboardIndex()
    },

    ArrowDown(event) {
      if (visibleResults === null) return
      event.preventDefault()
      searchStore.incrementKeyboardIndex()
    },
  }

  return (event) => {
    keydownHandler[event.key]?.(event)
  }
}
