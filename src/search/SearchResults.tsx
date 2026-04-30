import { type FC, type RefObject } from 'react'
import { Link } from '../links/Link.tsx'
import { SearchDivider } from './SearchDivider.tsx'
import { SearchHint } from './SearchHint.tsx'
import { useSearch } from './useSearch.ts'

type Props = {
  searchInputRef: RefObject<HTMLInputElement | null>
}

export const SearchResults: FC<Props> = ({ searchInputRef }) => {
  const { results, hiddenResults, focusedResult } = useSearch({
    searchInputRef,
  })

  return (
    <>
      {results !== null && results.total > 0 ? (
        results.map((link) => (
          <Link
            key={link.obj.url}
            link={link.obj}
            searchable={link.obj.searchUrl !== undefined}
            visible={true}
            focus={link === focusedResult}
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
              focus={link === focusedResult}
              showGroup
            />
          ))}
        </>
      ) : null}
    </>
  )
}
