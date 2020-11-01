import React, { memo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../stores'
import { Link } from '../Links/Link'
import './Search.scss'
import { SearchHints } from './SearchHints'
import { SearchTargetLabel } from './SearchTargetItem'
import { useSearch } from './useSearch'

export const Search = memo(function Search() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const { searchTerm, onSiteSearchTerm, searchTarget } = useSelector(
    (state: AppState) => ({
      searchTerm: state.search.searchTerm,
      onSiteSearchTerm: state.search.onSiteSearchTerm,
      searchTarget: state.search.searchTarget,
    })
  )

  const {
    handleInputKeydown,
    results,
    focusedResult,
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

      <input
        ref={searchInputRef}
        className="search__input"
        type="text"
        placeholder={searchTarget === null ? 'Search links...' : 'Search...'}
        value={searchTarget === null ? searchTerm : onSiteSearchTerm}
        onChange={handleInputChange}
        onKeyDown={handleInputKeydown}
      />

      <div className="search__results">
        {searchTarget === null ? (
          searchTerm === '' ? (
            <SearchHints />
          ) : results !== null && results.total > 0 ? (
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
          )
        ) : null}
      </div>
    </div>
  )
})
