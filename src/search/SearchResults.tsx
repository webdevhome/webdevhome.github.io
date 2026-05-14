import { useStore } from '@nanostores/react'
import { type FC } from 'react'
import { Link } from '../links/Link.tsx'
import { SearchDivider } from './SearchDivider.tsx'
import { SearchHint } from './SearchHint.tsx'
import { showCategoriesInSearchStore } from './categoriesInSearch.ts'
import { searchStore } from './searchStore.ts'

export const SearchResults: FC = () => {
  const showCategoriesInSearch = useStore(showCategoriesInSearchStore.$setting)

  const visibleResults = useStore(searchStore.$visibleResults)
  const hiddenResults = useStore(searchStore.$hiddenResults)
  const focusedResult = useStore(searchStore.$focusedResult)

  return (
    <>
      {visibleResults !== null && visibleResults.total > 0 ? (
        visibleResults.map((link) => (
          <Link
            key={link.obj.id}
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
              key={link.obj.id}
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
