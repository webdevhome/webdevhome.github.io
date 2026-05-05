import fuzzy from 'fuzzysort'
import type { LinkItem } from '../links/links.ts'

type GetSearchResultsOptions = {
  links: LinkItem[] | undefined
  searchTerm: string
  limit: number
}

export function getSearchResults({
  links = [],
  searchTerm,
  limit,
}: GetSearchResultsOptions): Fuzzysort.KeyResults<LinkItem> {
  return fuzzy.go(searchTerm, links, { key: 'title', limit })
}
