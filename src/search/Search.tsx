import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { type FC, useRef } from 'react'
import { onSiteSearchStore } from './onSiteSearch.ts'
import { searchStore } from './search.ts'
import { SearchHints } from './SearchHints.tsx'
import { SearchResults } from './SearchResults.tsx'
import { SearchTargetLabel } from './SearchTargetLabel.tsx'
import { useAutoFocusSearchInput } from './useAutoFocusSearchInput.ts'
import { handleSearchInputChange } from './handleSearchInputChange.ts'
import { handleSearchInputKeydown } from './handleSearchInputKeydown.ts'

export const Search: FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const searchTerm = useStore(searchStore.$searchTerm)
  const onSiteSearchTerm = useStore(onSiteSearchStore.$searchTerm)
  const searchTarget = useStore(onSiteSearchStore.$searchTarget)

  useAutoFocusSearchInput(searchInputRef)

  return (
    <div className="small-height:py-4 small-height:gap-y-6 mx-auto flex w-150 max-w-full flex-col gap-y-8 px-4 py-10">
      {searchTarget !== null && <SearchTargetLabel target={searchTarget} />}

      <div className="flex max-w-full flex-col">
        <input
          ref={searchInputRef}
          className={classNames(
            'block h-12',
            'px-6',
            'border-none',
            'bg-black/10 dark:bg-white/10',
            'font-sans text-xl',
            'text-black/80 dark:text-white/80',
            'placeholder:text-black/40 dark:placeholder:text-white/40',
            'rounded-full',
            'outline-0 focus:outline-4',
            'focus:outline-brand-700/50 dark:focus:outline-brand-400/80',
          )}
          type="text"
          placeholder={
            searchTarget === null ? 'Search links...' : `Search on website...`
          }
          value={searchTarget === null ? searchTerm : onSiteSearchTerm}
          onChange={handleSearchInputChange}
          onKeyDown={handleSearchInputKeydown}
        />
      </div>

      {searchTarget === null && (
        <div>{searchTerm === '' ? <SearchHints /> : <SearchResults />}</div>
      )}
    </div>
  )
}
