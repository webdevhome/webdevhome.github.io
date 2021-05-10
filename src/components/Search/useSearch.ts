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
import { useDispatch, useSelector } from 'react-redux'
import { getAllLinks, LinkItem, SearchTarget } from '../../links'
import { AppState } from '../../stores'
import { setAppMode } from '../../stores/appMode/appModeActions'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { useLinkIsHidden } from '../../stores/hiddenLinks/hiddenLinksHooks'
import {
  setOnSiteSearchTerm,
  setSearchTarget,
  setSearchTerm,
} from '../../stores/search/searchActions'
import { getUrl } from './getUrl'

const fuzzyOptions = { key: 'title', allowTypo: false, limit: 6 }

interface UseSearchParams {
  searchInputRef: RefObject<HTMLInputElement>
}

interface UseSearchReturn {
  results: Fuzzysort.KeyResults<LinkItem> | null
  focusedResult: Fuzzysort.KeyResult<LinkItem> | null
  handleInputKeydown: (event: KeyboardEvent<HTMLInputElement>) => void
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useSearch({
  searchInputRef,
}: UseSearchParams): UseSearchReturn {
  const searchTerm = useSelector((state: AppState) => state.search.searchTerm)
  const onSiteSearchTerm = useSelector(
    (state: AppState) => state.search.onSiteSearchTerm
  )
  const linkIsHidden = useLinkIsHidden()
  const dispatch = useDispatch()
  const searchTarget = useSelector(
    (state: AppState) => state.search.searchTarget
  )

  const [keyboardIndex, setKeyboardIndex] = useState<number>(0)

  const visibleLinks = useMemo(() => {
    return getAllLinks().filter((link) => !linkIsHidden(link))
  }, [linkIsHidden])

  const results = useMemo(() => {
    if (visibleLinks === null) return null
    if (searchTerm === '') return null
    if (searchTarget !== null) return null

    return fuzzy.go(searchTerm, visibleLinks, fuzzyOptions)
  }, [searchTarget, searchTerm, visibleLinks])

  const focusedResult = useMemo(() => {
    return results?.[keyboardIndex] ?? null
  }, [keyboardIndex, results])

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
            searchTerm
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
          setKeyboardIndex(Math.min(results.total - 1, keyboardIndex + 1))
        }
      }
    },
    [
      dispatch,
      focusedResult,
      keyboardIndex,
      onSiteSearchTerm,
      results,
      searchTarget,
      searchTerm,
    ]
  )

  return { results, focusedResult, handleInputKeydown, handleInputChange }
}
