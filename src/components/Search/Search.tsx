import classNames from 'classnames'
import { FC, useRef } from 'react'
import { useAppSelector } from '../../stores'
import { Link } from '../Links/Link'
import { SearchDivider } from './SearchDivider'
import { SearchHint } from './SearchHint'
import { SearchHints } from './SearchHints'
import { SearchTargetLabel } from './SearchTargetItem'
import { useSearch } from './useSearch'

export const Search: FC = () => {
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
            'bg-gray-200 dark:bg-gray-500',
            'font-sans text-2xl',
            'text-gray-800 dark:text-white',
            'placeholder:text-gray-400 dark:placeholder:text-gray-300',
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
            <SearchHints>
              <SearchHint>Type ahead to filter links.</SearchHint>

              <SearchHint inputs={['Return']}>Open link</SearchHint>

              <SearchHint inputs={['Ctrl', 'Return']}>
                Open link in a new tab (background)
              </SearchHint>

              <SearchHint inputs={['Ctrl', 'Shift', 'Return']}>
                Open link in a new tab (foreground)
              </SearchHint>
            </SearchHints>
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
                <SearchHints>
                  <SearchHint>No results found...</SearchHint>
                </SearchHints>
              )}

              {hiddenResults !== null && hiddenResults.total > 0 ? (
                <>
                  <SearchDivider text="Disabled links" />

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
}
