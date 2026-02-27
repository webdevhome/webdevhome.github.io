import { LinkItem, SearchTarget } from '../../links'

export function getUrl(
  focusedItem: LinkItem | null,
  searchTarget?: SearchTarget | null,
  searchTerm?: string,
): string | null {
  if (
    searchTarget !== null &&
    searchTarget !== undefined &&
    searchTerm !== undefined &&
    searchTerm !== ''
  ) {
    const concatChar = searchTarget.searchConcat ?? '+'
    const encodedSearchTerm = searchTerm.replaceAll(' ', concatChar)
    return searchTarget.searchUrl.replaceAll('{search}', encodedSearchTerm)
  }

  return focusedItem?.url ?? null
}
