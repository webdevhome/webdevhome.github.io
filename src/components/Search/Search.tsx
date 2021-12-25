import React, { memo, useRef } from 'react'
import { useAppSelector } from '../../stores'
import { Link } from '../Links/Link'
import './Search.scss'
import { SearchHints } from './SearchHints'
import { SearchTargetLabel } from './SearchTargetItem'
import { useSearch } from './useSearch'

export const Search = memo(function Search() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const searchTerm = useAppSelector((state) => state.search.searchTerm)
  const onSiteSearchTerm = useAppSelector(
    (state) => state.search.onSiteSearchTerm
  )
  const searchTarget = useAppSelector((state) => state.search.searchTarget)

  const {
    results,
    hiddenResults,
    focusedResult,
    handleInputKeydown,
    handleInputChange,
  } = useSearch({ searchInputRef })

  return (
    <div className="search">
      {searchTarget !== null ? (
        <SearchTargetLabel
          title={searchTarget.title}
          icon={searchTarget.icon}
          color={searchTarget.color}
        />
      ) : null}

      <div className="search__input-container">
        <input
          ref={searchInputRef}
          className="search__input"
          type="text"
          placeholder={searchTarget === null ? 'Search links...' : 'Search...'}
          value={searchTarget === null ? searchTerm : onSiteSearchTerm}
          onChange={handleInputChange}
          onKeyDown={handleInputKeydown}
        />
      </div>

      <div className="search__results">
        {searchTarget === null ? (
          searchTerm === '' ? (
            <SearchHints />
          ) : (
            <>
              {results !== null && results.total > 0 ? (
                results.map((link) => (
                  <Link
                    key={link.obj.url}
                    link={link.obj}
                    searchable={link.obj.searchUrl !== undefined}
                    visible={true}
                    focus={link === focusedResult}
                  />
                ))
              ) : (
                <div className="search__results-hint">No results found...</div>
              )}

              {hiddenResults !== null && hiddenResults.total > 0 ? (
                <>
                  <div className="search__results-headline">
                    <div className="search__results-headline-decoration" />
                    Disabled links
                    <div className="search__results-headline-decoration" />
                  </div>
                  {hiddenResults.map((link) => (
                    <Link
                      key={link.obj.url}
                      link={link.obj}
                      searchable={link.obj.searchUrl !== undefined}
                      visible={true}
                      focus={link === focusedResult}
                    />
                  ))}
                </>
              ) : null}
            </>
          )
        ) : null}
      </div>
    </div>
  )
})
