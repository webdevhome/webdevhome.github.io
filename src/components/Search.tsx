import fuzzy from 'fuzzysort'
import React, { ChangeEvent, Dispatch, FC, KeyboardEvent as ReactKeyboardEvent, memo, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import { getAllLinks, LinkItem, SearchTarget } from '../links'
import { AppMode, setMode } from '../stores/currentModeStore'
import { useHiddenLinks } from '../stores/hiddenLinksStore'
import { Link } from './Link'
import { SearchTargetItem } from './SearchTargetItem'

interface SearchProps {
  latestKeypress: string
}

export const Search: FC<SearchProps> = memo(({ latestKeypress }) => {
  const {
    searchTerm, setSearchTerm,
    searchTarget, setSearchTarget,
    keyboardIndex, setKeyboardIndex,
    results, focusedResult,
    inputElement
  } = useSearch(latestKeypress)

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown)

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown)
    }
  })

  function handleInputChange (event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.currentTarget.value)
    setKeyboardIndex(0)
  }

  function handleInputKeyDown (event: ReactKeyboardEvent<HTMLInputElement>): void {
    switch (event.key) {
      case 'Backspace': {
        if (searchTerm !== '') { return }

        if (searchTarget !== null) {
          setSearchTarget(null)
        } else {
          setMode(AppMode.default)
        }
        break
      }

      case 'Tab': {
        event.preventDefault()

        if (searchTarget !== null) { return }
        if (focusedResult === null) { return }
        if (focusedResult.obj.searchUrl === undefined) { return }

        setSearchTarget(focusedResult.obj as SearchTarget)
        setSearchTerm('')
        break
      }

      case 'Enter': {
        const url = getUrl(focusedResult?.obj ?? null, searchTarget, searchTerm)

        if (url === null) { return }

        if (event.ctrlKey) {
          window.open(url, '', 'alwaysRaised=on')
        } else {
          window.location.href = url
        }

        setMode(AppMode.default)
        break
      }

      case 'ArrowUp': {
        if (results === null) { return }
        event.preventDefault()
        setKeyboardIndex(Math.max(0, keyboardIndex - 1))
        break
      }

      case 'ArrowDown': {
        if (results === null) { return }
        event.preventDefault()
        setKeyboardIndex(Math.min(results.total - 1, keyboardIndex + 1))
      }
    }
  }

  function handleGlobalKeyDown (event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      if (searchTarget !== null) {
        setSearchTarget(null)
        setSearchTerm('')
        return
      }

      setMode(AppMode.default)
    }
  }

  const hints = <>
    <div className="search__results-hint">
      Type ahead to filter links.
    </div>
    <div className="search__results-hint">
      <kbd>Return</kbd>
      <div className="search__results-hint-description">
        Open link
      </div>
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

  const resultElements = <>
    {results !== null && results.total > 0 ? (
      results.map(link => (
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
        ref={inputElement}
        type="text"
        value={searchTerm}
        placeholder={searchTarget === null ? 'Search links...' : 'Search...'}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />

      <div className="search__results">
        {searchTarget === null
          ? (searchTerm === '' ? hints : resultElements)
          : null
        }
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
  inputElement: RefObject<HTMLInputElement>
}

function useSearch (latestKeypress: string): UseSearch {
  const [keyboardIndex, setKeyboardIndex] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchTarget, setSearchTarget] = useState<SearchTarget | null>(null)
  const inputElement = useRef<HTMLInputElement>(null)
  const { links } = useHiddenLinks()
  const visibleLinks = getAllLinks().filter(link => !links.includes(link.url))

  const fuzzyOptions: Fuzzysort.KeyOptions = {
    key: 'title', allowTypo: false, limit: 6
  }

  const results = searchTerm !== '' && searchTarget === null
    ? fuzzy.go(searchTerm, visibleLinks, fuzzyOptions)
    : null

  const focusedResult = results?.[keyboardIndex] ?? null

  useEffect(() => {
    setSearchTerm(latestKeypress)
    inputElement.current?.focus()
  }, [latestKeypress])

  return {
    searchTerm,
    setSearchTerm,
    searchTarget,
    setSearchTarget,
    keyboardIndex,
    setKeyboardIndex,
    results,
    focusedResult,
    inputElement
  }
}

function getUrl (
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
    return searchTarget.searchUrl.replace(/\{search\}/, searchTerm)
  }

  if (focusedItem !== null) {
    return focusedItem.url
  }

  return null
}
