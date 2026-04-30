import { type SearchTarget } from '../links/links.ts'

export function getOnSiteSearchUrl(
  searchTarget: SearchTarget | null,
  searchTerm: string,
): string | null {
  if (searchTarget === null) return null

  const encodedSearchTerm = encodeURIComponent(searchTerm)
  return searchTarget.searchUrl.replaceAll('{search}', encodedSearchTerm)
}
