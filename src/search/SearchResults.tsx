import { useStore } from '@nanostores/react'
import { type FC } from 'react'
import { Link } from '../links/Link.tsx'
import { SearchDivider } from './SearchDivider.tsx'
import { SearchHint } from './SearchHint.tsx'
import { useShowCategoriesInSearch } from './categoriesInSearch.ts'
import {
  $focusedSearchResult,
  $hiddenSearchResults,
  $visibleSearchResults,
} from './search.ts'

export const SearchResults: FC = () => {
  const showCategoriesInSearch = useShowCategoriesInSearch()

  const visibleResults = useStore($visibleSearchResults)
  const hiddenResults = useStore($hiddenSearchResults)
  const focusedResult = useStore($focusedSearchResult)

  return (
    <>
      {visibleResults !== null && visibleResults.total > 0 ? (
        visibleResults.map((link) => (
          <Link
            key={link.obj.url}
            link={link.obj}
            focused={link === focusedResult}
            showCategory={showCategoriesInSearch}
          />
        ))
      ) : (
        <div className="mx-6 text-base">
          <SearchHint>No results found...</SearchHint>
        </div>
      )}

      {hiddenResults !== null && hiddenResults.total > 0 ? (
        <>
          <SearchDivider text="Hidden links" />

          {hiddenResults.map((link) => (
            <Link
              key={link.obj.url}
              link={link.obj}
              focused={link === focusedResult}
              showCategory={showCategoriesInSearch}
            />
          ))}
        </>
      ) : null}
    </>
  )
}
