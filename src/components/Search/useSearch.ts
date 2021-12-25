import fuzzy from 'fuzzysort'
import {
  ChangeEvent,
  KeyboardEvent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getAllLinks, LinkItem, SearchTarget } from '../../links'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setAppMode } from '../../stores/appMode/appModeActions'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { useGetIsLinkHidden } from '../../stores/hiddenLinks/hiddenLinksHooks'
import {
  setOnSiteSearchTerm,
  setSearchTarget,
  setSearchTerm,
} from '../../stores/search/searchActions'
import { getUrl } from './getUrl'

const fuzzyOptions = { key: 'title', allowTypo: false }
const maxResultsCount = 6
const maxHiddenResultsCount = 2

interface GroupedLinks {
  visible: LinkItem[]
  hidden: LinkItem[]
}

interface UseSearchParams {
  searchInputRef: RefObject<HTMLInputElement>
}

interface UseSearchReturn {
  results: Fuzzysort.KeyResults<LinkItem> | null
  hiddenResults: Fuzzysort.KeyResults<LinkItem> | null
  focusedResult: Fuzzysort.KeyResult<LinkItem> | null
  handleInputKeydown: (event: KeyboardEvent<HTMLInputElement>) => void
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useSearch({
  searchInputRef,
}: UseSearchParams): UseSearchReturn {
  const searchTerm = useAppSelector((state) => state.search.searchTerm)
  const onSiteSearchTerm = useAppSelector(
    (state) => state.search.onSiteSearchTerm
  )
  const searchTarget = useAppSelector((state) => state.search.searchTarget)
  const getIsLinkHidden = useGetIsLinkHidden()
  const dispatch = useAppDispatch()

  const [keyboardIndex, setKeyboardIndex] = useState<number>(0)

  const links = useMemo(() => {
    const result: GroupedLinks = { visible: [], hidden: [] }
    const allLinks = getAllLinks()

    for (const link of allLinks) {
      result[getIsLinkHidden(link) ? 'hidden' : 'visible'].push(link)
    }

    return result
  }, [getIsLinkHidden])

  const results = useMemo(() => {
    if (links.visible.length === 0) return null
    if (searchTerm === '') return null
    if (searchTarget !== null) return null

    return fuzzy.go(searchTerm, links.visible, {
      ...fuzzyOptions,
      limit: maxResultsCount,
    })
  }, [searchTarget, searchTerm, links])

  const hiddenResults = useMemo(() => {
    if (links.hidden.length === 0) return null
    if (searchTerm === '') return null
    if (searchTarget !== null) return null

    return fuzzy.go(searchTerm, links.hidden, {
      ...fuzzyOptions,
      limit: maxHiddenResultsCount,
    })
  }, [links.hidden, searchTarget, searchTerm])

  const focusedResult = useMemo(() => {
    if (results !== null && keyboardIndex < results.length) {
      return results[keyboardIndex]
    }

    if (hiddenResults !== null) {
      return hiddenResults[keyboardIndex - (results?.length ?? 0)]
    }

    return null
  }, [hiddenResults, keyboardIndex, results])

  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }, [searchInputRef])

  const handleGlobalKeydown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (searchTarget !== null) {
          event.preventDefault()
          dispatch(setSearchTarget(null))
          if (searchTerm === '') {
            dispatch(setAppMode(AppMode.default))
          }
        } else {
          event.preventDefault()
          dispatch(setAppMode(AppMode.default))
        }
        return
      }

      if (event.key.length === 1) {
        if (searchInputRef.current === null) return
        if (searchInputRef.current !== globalThis.document.activeElement) {
          searchInputRef.current.focus()
        }
      }
    },
    [dispatch, searchInputRef, searchTarget, searchTerm]
  )

  useEffect(() => {
    globalThis.addEventListener('keydown', handleGlobalKeydown)
    return () => {
      globalThis.removeEventListener('keydown', handleGlobalKeydown)
    }
  }, [handleGlobalKeydown])

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      if (searchTarget === null) {
        dispatch(setSearchTerm(event.target.value))
      } else {
        dispatch(setOnSiteSearchTerm(event.target.value))
      }

      setKeyboardIndex(0)
    },
    [dispatch, searchTarget, setKeyboardIndex]
  )

  const handleInputKeydown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      switch (event.key) {
        case 'Backspace': {
          if (searchTarget !== null && onSiteSearchTerm === '') {
            event.preventDefault()
            dispatch(setSearchTarget(null))
            if (searchTerm === '') {
              dispatch(setAppMode(AppMode.default))
            }
          } else if (searchTerm === '' && onSiteSearchTerm === '') {
            event.preventDefault()
            dispatch(setAppMode(AppMode.default))
          }

          break
        }

        case 'Tab': {
          event.preventDefault()

          if (searchTarget !== null) return
          if (focusedResult === null) return
          if (focusedResult.obj.searchUrl === undefined) return

          dispatch(setSearchTarget(focusedResult.obj as SearchTarget))
          break
        }

        case 'Enter': {
          const url = getUrl(
            focusedResult?.obj ?? null,
            searchTarget,
            onSiteSearchTerm
          )

          if (url === null) return

          if (event.ctrlKey) {
            window.open(url, '', 'alwaysRaised=on')
          } else {
            window.location.href = url
          }

          if (event.ctrlKey || event.shiftKey) {
            dispatch(setAppMode(AppMode.default))
          }
          break
        }

        case 'ArrowUp': {
          if (results === null) return

          event.preventDefault()
          setKeyboardIndex(Math.max(0, keyboardIndex - 1))
          break
        }

        case 'ArrowDown': {
          if (results === null) return

          event.preventDefault()

          const resultsCount = Math.min(results.total, maxResultsCount)
          const hiddenResultsCount = Math.min(
            hiddenResults?.total ?? 0,
            maxHiddenResultsCount
          )
          const totalResultsCount = resultsCount + hiddenResultsCount

          setKeyboardIndex(Math.min(totalResultsCount - 1, keyboardIndex + 1))
        }
      }
    },
    [
      dispatch,
      focusedResult,
      hiddenResults?.total,
      keyboardIndex,
      onSiteSearchTerm,
      results,
      searchTarget,
      searchTerm,
    ]
  )

  return {
    results,
    hiddenResults,
    focusedResult,
    handleInputKeydown,
    handleInputChange,
  }
}
