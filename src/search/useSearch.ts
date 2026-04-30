import { useAtom } from '@xoid/react'
import fuzzy from 'fuzzysort'
import {
  type ChangeEvent,
  type KeyboardEvent,
  type RefObject,
  useEffect,
} from 'react'
import { atom } from 'xoid'
import { allLinks, type LinkItem, type SearchTarget } from '../links/links.ts'
import { appMode, exitSearchMode, setAppMode } from '../app/appModeStore.ts'
import { useOpenLinksInNewTab } from '../links/useOpenLinksInNewTab.ts'
import { isUrlHidden } from '../links/hiddenUrlsStore.ts'
import { getOnSiteSearchUrl } from './getOnSiteSearchUrl.ts'

const fuzzyOptions = { key: 'title', allowTypo: false }
const maxResultsCount = 8
const maxHiddenResultsCount = 4

const $searchTerm = atom('')
const $onSiteSearchTerm = atom('')
const $searchTarget = atom(null as SearchTarget | null)
const $keyboardIndex = atom(0)

export function useSearchTerm(): string {
  return useAtom($searchTerm)
}

export function setSearchTerm(term: string = ''): void {
  $searchTerm.set(term)
}

export function hasValidSearchTerm(): boolean {
  return $searchTerm.value.trim() !== ''
}

export function useOnSiteSearchTerm(): string {
  return useAtom($onSiteSearchTerm)
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
  return useAtom($searchTarget)
}

type Params = {
  searchInputRef: RefObject<HTMLInputElement | null>
}

type UseSearch = {
  results: Fuzzysort.KeyResults<LinkItem> | null
  hiddenResults: Fuzzysort.KeyResults<LinkItem> | null
  focusedResult: Fuzzysort.KeyResult<LinkItem> | null
  handleInputKeydown: (event: KeyboardEvent<HTMLInputElement>) => void
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useSearch({ searchInputRef }: Params): UseSearch {
  const searchTerm = useAtom($searchTerm)
  const onSiteSearchTerm = useAtom($onSiteSearchTerm)
  const searchTarget = useAtom($searchTarget)
  const keyboardIndex = useAtom($keyboardIndex)

  const openLinksInNewTab = useOpenLinksInNewTab()

  const links = Object.groupBy(allLinks, (link) =>
    isUrlHidden(link.url) ? 'hidden' : 'visible',
  )

  const results = (() => {
    if (links.visible === undefined) return null
    if (links.visible.length === 0) return null
    if (searchTerm === '') return null
    if (searchTarget !== null) return null

    return fuzzy.go(searchTerm, links.visible, {
      ...fuzzyOptions,
      limit: maxResultsCount,
    })
  })()

  const hiddenResults = (() => {
    if (links.hidden === undefined) return null
    if (links.hidden.length === 0) return null
    if (searchTerm === '') return null
    if (searchTarget !== null) return null

    return fuzzy.go(searchTerm, links.hidden, {
      ...fuzzyOptions,
      limit: maxHiddenResultsCount,
    })
  })()

  const focusedResult = (() => {
    if (results !== null && keyboardIndex < results.length) {
      return results[keyboardIndex]
    }

    if (hiddenResults !== null) {
      return hiddenResults[keyboardIndex - (results?.length ?? 0)]
    }

    return null
  })()

  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }, [searchInputRef])

  useEffect(() => {
    function handleGlobalKeydown(event: globalThis.KeyboardEvent) {
      if (event.key.length === 1) {
        if (searchInputRef.current === null) return
        if (searchInputRef.current !== document.activeElement) {
          searchInputRef.current.focus()
        }
      }
    }

    addEventListener('keydown', handleGlobalKeydown)

    return () => {
      removeEventListener('keydown', handleGlobalKeydown)
    }
  }, [searchInputRef])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    if (searchTarget === null) {
      $searchTerm.set(event.target.value)
    } else {
      $onSiteSearchTerm.set(event.target.value)
    }

    $keyboardIndex.set(0)
  }

  function handleInputKeydown(event: KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case 'Backspace': {
        if (searchTarget !== null && onSiteSearchTerm === '') {
          event.preventDefault()
          $searchTarget.set(null)
          if (searchTerm === '') {
            setAppMode(appMode.default)
          }
        } else if (searchTerm === '' && onSiteSearchTerm === '') {
          event.preventDefault()
          setAppMode(appMode.default)
        }

        break
      }

      case 'Tab': {
        event.preventDefault()

        if (searchTarget !== null) return
        if (focusedResult === null) return
        if (focusedResult.obj.searchUrl === undefined) return

        $searchTarget.set(focusedResult.obj as SearchTarget)
        break
      }

      case 'Enter': {
        const url = (() => {
          if (searchTarget === null) {
            return focusedResult?.obj.url ?? null
          }
          return getOnSiteSearchUrl(searchTarget, onSiteSearchTerm)
        })()

        if (url === null) return

        console.log(`Searching: ${url}`)

        if (event.ctrlKey || openLinksInNewTab) {
          open(url, '')
          exitSearchMode()
        } else {
          location.href = url
        }

        break
      }

      case 'ArrowUp': {
        if (results === null) return

        event.preventDefault()

        $keyboardIndex.update((i) => Math.max(0, i - 1))
        break
      }

      case 'ArrowDown': {
        if (results === null) return

        event.preventDefault()

        const resultsCount = Math.min(results.total, maxResultsCount)
        const hiddenResultsCount = Math.min(
          hiddenResults?.total ?? 0,
          maxHiddenResultsCount,
        )
        const totalResultsCount = resultsCount + hiddenResultsCount

        $keyboardIndex.update((i) => Math.min(totalResultsCount - 1, i + 1))
      }
    }
  }

  return {
    results,
    hiddenResults,
    focusedResult,
    handleInputKeydown,
    handleInputChange,
  }
}
