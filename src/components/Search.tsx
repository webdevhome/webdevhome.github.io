import fuzzy from 'fuzzysort'
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  KeyboardEvent as ReactKeyboardEvent,
  memo,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from 'react'
import { AppMode, CurrentModeContext } from '../contexts/currentModeContext'
import { HiddenLinksContext } from '../contexts/hiddenLinksContext'
import { getAllLinks, LinkItem, SearchTarget } from '../links'
import { Link } from './Link'
import { SearchTargetItem } from './SearchTargetItem'

interface Props {
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

export const Search: FC<Props> = memo(({ searchTerm, setSearchTerm }) => {
  const {
    searchTarget,
    setSearchTarget,
    keyboardIndex,
    setKeyboardIndex,
    results,
    focusedResult,
  } = useSearch(searchTerm, setSearchTerm)

  const currentModeContext = useContext(CurrentModeContext)

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown)

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown)
    }
  })

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setSearchTerm(event.target.value)
      setKeyboardIndex(0)
    },
    [setKeyboardIndex, setSearchTerm]
  )

  const handleInputKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLInputElement>): void => {
      switch (event.key) {
        case 'Backspace': {
          if (searchTerm !== '') {
            return
          }

          if (searchTarget !== null) {
            setSearchTarget(null)
          } else {
            currentModeContext?.setCurrentMode(AppMode.default)
          }
          break
        }

        case 'Tab': {
          event.preventDefault()

          if (searchTarget !== null) {
            return
          }
          if (focusedResult === null) {
            return
          }
          if (focusedResult.obj.searchUrl === undefined) {
            return
          }

          setSearchTarget(focusedResult.obj as SearchTarget)
          setSearchTerm('')
          break
        }

        case 'Enter': {
          const url = getUrl(
            focusedResult?.obj ?? null,
            searchTarget,
            searchTerm
          )

          if (url === null) {
            return
          }

          if (event.ctrlKey) {
            window.open(url, '', 'alwaysRaised=on')
          } else {
            window.location.href = url
          }

          if (event.ctrlKey || event.shiftKey) {
            currentModeContext?.setCurrentMode(AppMode.default)
          }
          break
        }

        case 'ArrowUp': {
          if (results === null) {
            return
          }
          event.preventDefault()
          setKeyboardIndex(Math.max(0, keyboardIndex - 1))
          break
        }

        case 'ArrowDown': {
          if (results === null) {
            return
          }
          event.preventDefault()
          setKeyboardIndex(Math.min(results.total - 1, keyboardIndex + 1))
        }
      }
    },
    [
      currentModeContext,
      focusedResult,
      keyboardIndex,
      results,
      searchTarget,
      searchTerm,
      setKeyboardIndex,
      setSearchTarget,
      setSearchTerm,
    ]
  )

  const handleGlobalKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        if (searchTarget !== null) {
          setSearchTarget(null)
          setSearchTerm('')
          return
        }

        currentModeContext?.setCurrentMode(AppMode.default)
      }
    },
    [currentModeContext, searchTarget, setSearchTarget, setSearchTerm]
  )

  const hints = useMemo(
    () => (
      <>
        <div className="search__results-hint">Type ahead to filter links.</div>
        <div className="search__results-hint">
          <kbd>Return</kbd>
          <div className="search__results-hint-description">Open link</div>
        </div>
        <div className="search__results-hint">
          <kbd>Ctrl</kbd> + <kbd>Return</kbd>
          <div className="search__results-hint-description">
            Open link in a new tab (background)
          </div>
        </div>
        <div className="search__results-hint">
          <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Return</kbd>
          <div className="search__results-hint-description">
            Open link in a new tab (foreground)
          </div>
        </div>
      </>
    ),
    []
  )

  const resultElements = useMemo(
    () => (
      <>
        {results !== null && results.total > 0 ? (
          results.map((link) => (
            <Link
              key={link.obj.url}
              title={link.obj.title}
              url={link.obj.url}
              icon={link.obj.icon}
              searchable={link.obj.searchUrl !== undefined}
              color={link.obj.color}
              customize={false}
              visible={true}
              focus={link === focusedResult}
            />
          ))
        ) : (
          <div className="search__results-hint">No results found...</div>
        )}
      </>
    ),
    [focusedResult, results]
  )

  return (
    <div className="search">
      {searchTarget !== null ? (
        <SearchTargetItem
          title={searchTarget.title}
          icon={searchTarget.icon}
          color={searchTarget.color}
        />
      ) : null}

      <input
        className="search__input"
        autoFocus
        type="text"
        value={searchTerm}
        placeholder={searchTarget === null ? 'Search links...' : 'Search...'}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />

      <div className="search__results">
        {searchTarget === null
          ? searchTerm === ''
            ? hints
            : resultElements
          : null}
      </div>
    </div>
  )
})

interface UseSearch {
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  searchTarget: SearchTarget | null
  setSearchTarget: Dispatch<SetStateAction<SearchTarget | null>>
  keyboardIndex: number
  setKeyboardIndex: Dispatch<SetStateAction<number>>
  results: Fuzzysort.KeyResults<LinkItem> | null
  focusedResult: Fuzzysort.KeyResult<LinkItem> | null
}

function useSearch(
  searchTerm: string,
  setSearchTerm: Dispatch<SetStateAction<string>>
): UseSearch {
  const [keyboardIndex, setKeyboardIndex] = useState<number>(0)
  const [searchTarget, setSearchTarget] = useState<SearchTarget | null>(null)
  const hiddenLinksContext = useContext(HiddenLinksContext)

  const visibleLinks = useMemo(() => {
    if (hiddenLinksContext === null) {
      return null
    }

    return getAllLinks().filter(
      (link) => !hiddenLinksContext.hiddenLinks.includes(link.url)
    )
  }, [hiddenLinksContext])

  const fuzzyOptions: Fuzzysort.KeyOptions = useMemo(
    () => ({ key: 'title', allowTypo: false, limit: 6 }),
    []
  )

  const results = useMemo(() => {
    if (visibleLinks === null) return null
    if (searchTerm === '') return null
    if (searchTarget !== null) return null

    return fuzzy.go(searchTerm, visibleLinks, fuzzyOptions)
  }, [fuzzyOptions, searchTarget, searchTerm, visibleLinks])

  const focusedResult = useMemo(() => results?.[keyboardIndex] ?? null, [
    keyboardIndex,
    results,
  ])

  useLayoutEffect(() => {
    setSearchTerm('')
    return () => {
      setSearchTerm('')
    }
  }, [setSearchTerm])

  return {
    searchTerm,
    setSearchTerm,
    searchTarget,
    setSearchTarget,
    keyboardIndex,
    setKeyboardIndex,
    results,
    focusedResult,
  }
}

function getUrl(
  focusedItem: LinkItem | null,
  searchTarget?: SearchTarget | null,
  searchTerm?: string
): string | null {
  if (
    searchTarget !== null &&
    searchTarget !== undefined &&
    searchTerm !== undefined &&
    searchTerm !== ''
  ) {
    const concatChar = searchTarget.searchConcat ?? '+'
    const encodedSearchTerm = searchTerm.replace(/ /g, concatChar)
    return searchTarget.searchUrl.replace(/\{search\}/, encodedSearchTerm)
  }

  if (focusedItem !== null) {
    return focusedItem.url
  }

  return null
}
