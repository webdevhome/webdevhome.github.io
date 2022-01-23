import classNames from 'classnames'
import React, { memo, useRef } from 'react'
import { useAppSelector } from '../../stores'
import { Link } from '../Links/Link'
import { SearchHints } from './SearchHints'
import { SearchTargetLabel } from './SearchTargetItem'
import { useSearch } from './useSearch'

export const Search = memo(function Search() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const searchTerm = useAppSelector((state) => state.search.searchTerm)
  const onSiteSearchTerm = useAppSelector(
    (state) => state.search.onSiteSearchTerm,
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
    <div className="flex flex-col w-[600px] max-w-full mx-auto px-4 py-10">
      {searchTarget !== null ? (
        <SearchTargetLabel
          title={searchTarget.title}
          icon={searchTarget.icon}
          color={searchTarget.color}
        />
      ) : null}

      <div className="max-w-full flex flex-col">
        <input
          ref={searchInputRef}
          className={classNames(
            'block h-14',
            'my-5 px-8',
            'border-none',
            'bg-gray-200',
            'font-sans text-2xl',
            'rounded-full',
            'outline-2 focus:outline-brand-500',
          )}
          type="text"
          placeholder={searchTarget === null ? 'Search links...' : 'Search...'}
          value={searchTarget === null ? searchTerm : onSiteSearchTerm}
          onChange={handleInputChange}
          onKeyDown={handleInputKeydown}
        />
      </div>

      <div>
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
                <div className="px-8 text-gray-800 text-lg select-none">
                  No results found...
                </div>
              )}

              {hiddenResults !== null && hiddenResults.total > 0 ? (
                <>
                    <div className={classNames(
                      'grid grid-cols-[1fr,auto,1fr] gap-x-4 items-center',
                      'text-gray-500',
                      'uppercase tracking-wide'
                  )}>
                    <div className="h-px bg-gray-400" />
                    Disabled links
                    <div className="h-px bg-gray-400" />
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
