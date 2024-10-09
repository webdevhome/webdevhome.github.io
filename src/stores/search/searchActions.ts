import { SearchTarget } from '../../links'

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const SET_ON_SITE_SEARCH_TERM = 'SET_ON_SITE_SEARCH_TERM'
export const SET_CURRENT_SEARCH_TARGET = 'SET_CURRENT_SEARCH_TARGET'

interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM
  payload: string
}

interface SetOnSiteSearchTermAction {
  type: typeof SET_ON_SITE_SEARCH_TERM
  payload: string
}

interface SetSearchTargetAction {
  type: typeof SET_CURRENT_SEARCH_TARGET
  payload: SearchTarget | null
}

export type SearchActions =
  | SetSearchTermAction
  | SetOnSiteSearchTermAction
  | SetSearchTargetAction

export function setSearchTerm(searchTerm: string): SetSearchTermAction {
  return { type: SET_SEARCH_TERM, payload: searchTerm }
}

export function setOnSiteSearchTerm(
  searchTerm: string,
): SetOnSiteSearchTermAction {
  return { type: SET_ON_SITE_SEARCH_TERM, payload: searchTerm }
}

export function setSearchTarget(
  searchTarget: SearchTarget | null,
): SetSearchTargetAction {
  return { type: SET_CURRENT_SEARCH_TARGET, payload: searchTarget }
}
