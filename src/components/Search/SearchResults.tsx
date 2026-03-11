import { FC, RefObject } from 'react'
import { Link } from '../Links/Link'
import { SearchDivider } from './SearchDivider'
import { SearchHint } from './SearchHint'
import { useSearch } from './useSearch'

type Props = {
  searchInputRef: RefObject<HTMLInputElement>
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
            />
          ))}
        </>
      ) : null}
    </>
  )
}
