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
    const encodedSearchTerm = searchTerm.replace(/ /g, concatChar)
    return searchTarget.searchUrl.replace(/\{search\}/, encodedSearchTerm)
  }

  return focusedItem !== null ? focusedItem.url : null
}
