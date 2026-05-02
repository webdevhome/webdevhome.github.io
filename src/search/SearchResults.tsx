import { useStore } from '@nanostores/react'
import { type FC } from 'react'
import { Link } from '../links/Link.tsx'
import { SearchDivider } from './SearchDivider.tsx'
import { SearchHint } from './SearchHint.tsx'
import {
  $focusedSearchResult,
  $hiddenSearchResults,
  $visibleSearchResults,
} from './useSearch.ts'

export const SearchResults: FC = () => {
  const results = useStore($visibleSearchResults)
  const hiddenResults = useStore($hiddenSearchResults)
  const focusedResult = useStore($focusedSearchResult)

  return (
    <>
      {results !== null && results.total > 0 ? (
        results.map((link) => (
          <Link
            key={link.obj.url}
            link={link.obj}
            searchable={link.obj.searchUrl !== undefined}
            visible={true}
            focused={link === focusedResult}
            showGroup
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
              searchable={link.obj.searchUrl !== undefined}
              visible={true}
              focused={link === focusedResult}
              showGroup
            />
          ))}
        </>
      ) : null}
    </>
  )
}
