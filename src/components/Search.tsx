import fuzzy from 'fuzzysort'
import React, { ChangeEvent, FC, KeyboardEvent, memo, useEffect, useRef, useState, Dispatch, SetStateAction, RefObject } from 'react'
import { getAllLinks, LinkItem } from '../links'
import { setMode } from '../stores/currentModeStore'
import { useHiddenLinks } from '../stores/hiddenLinksStore'
import { Link } from './Link'

interface SearchProps {
  latestKeypress: string
}

export const Search: FC<SearchProps> = memo(({ latestKeypress }) => {
  const {
    searchTerm, setSearchTerm,
    keyboardIndex, setKeyboardIndex,
    filteredLinks, focusedLink,
    inputElement
  } = useSearch(latestKeypress)

  function handleInputChange (event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.currentTarget.value)
  }

  function handleInputKeyDown (event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Backspace' && searchTerm === '') {
      setMode('default')
    }

    if (filteredLinks === null || filteredLinks.total === 0) { return }

    if (event.key === 'Enter' && focusedLink !== null) {
      if (event.ctrlKey) {
        window.open(focusedLink.obj.url, '', 'alwaysRaised=on')
      } else {
        window.location.href = focusedLink.obj.url
      }
      return
    }

    if (event.key === 'ArrowUp') {
      setKeyboardIndex(Math.max(0, keyboardIndex - 1))
      return
    }

    if (event.key === 'ArrowDown') {
      setKeyboardIndex(Math.min(filteredLinks.total - 1, keyboardIndex + 1))
    }
  }

  const hints = <>
    <div className="search__results-hint">
      Type ahead to filter links.
    </div>
    <div className="search__results-hint">
      <kbd>Return</kbd>
      <div className="search__results-hint-description">
        open link
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

  const results = <>
    {filteredLinks !== null && filteredLinks.total > 0 ? (
      filteredLinks.map(link => (
        <Link
          key={link.obj.url}
          title={link.obj.title}
          url={link.obj.url}
          icon={link.obj.icon}
          color={link.obj.color}
          customize={false}
          visible={true}
          focus={link === focusedLink}
        />
      ))
    ) : (
      <div>No results found...</div>
    )}
  </>

  return (
    <div className="search">
      <input
        className="search__input"
        ref={inputElement}
        type="text"
        value={searchTerm}
        placeholder="Search links..."
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />

      <div className="search__results">
        {searchTerm === '' ? hints : results}
      </div>
    </div>
  )
})

interface UseSearch {
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  keyboardIndex: number
  setKeyboardIndex: Dispatch<SetStateAction<number>>
  filteredLinks: Fuzzysort.KeyResults<LinkItem> | null
  focusedLink: Fuzzysort.KeyResult<LinkItem> | null
  inputElement: RefObject<HTMLInputElement>
}

function useSearch (latestKeypress: string): UseSearch {
  const [keyboardIndex, setKeyboardIndex] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const inputElement = useRef<HTMLInputElement>(null)
  const { links } = useHiddenLinks()
  const visibleLinks = getAllLinks().filter(link => !links.includes(link.url))

  const fuzzyOptions: Fuzzysort.KeyOptions = {
    key: 'title', allowTypo: false, limit: 6
  }

  const filteredLinks = searchTerm !== ''
    ? fuzzy.go(searchTerm, visibleLinks, fuzzyOptions)
    : null

  const focusedLink = filteredLinks?.[keyboardIndex] ?? null

  useEffect(() => {
    setSearchTerm(latestKeypress)
    inputElement.current?.focus()
  }, [latestKeypress])

  return {
    searchTerm,
    setSearchTerm,
    keyboardIndex,
    setKeyboardIndex,
    filteredLinks,
    focusedLink,
    inputElement
  }
}
