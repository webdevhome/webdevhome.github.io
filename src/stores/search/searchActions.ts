import { SearchTarget } from '../../links'

export const enum SearchActionType {
  SetSearchTerm = 'set search term',
  SetOnSiteSearchTerm = 'set on-site search term',
  SetCurrentSearchTarget = 'set current search target',
}

type SetSearchTermAction = {
  type: SearchActionType.SetSearchTerm
  payload: string
}

type SetOnSiteSearchTermAction = {
  type: SearchActionType.SetOnSiteSearchTerm
  payload: string
}

type SetSearchTargetAction = {
  type: SearchActionType.SetCurrentSearchTarget
  payload: SearchTarget | null
}

export type SearchActions =
  | SetSearchTermAction
  | SetOnSiteSearchTermAction
  | SetSearchTargetAction

export function setSearchTerm(searchTerm: string): SetSearchTermAction {
  return {
    type: SearchActionType.SetSearchTerm,
    payload: searchTerm,
  }
}

export function setOnSiteSearchTerm(
  searchTerm: string,
): SetOnSiteSearchTermAction {
  return {
    type: SearchActionType.SetOnSiteSearchTerm,
    payload: searchTerm,
  }
}

export function setSearchTarget(
  searchTarget: SearchTarget | null,
): SetSearchTargetAction {
  return {
    type: SearchActionType.SetCurrentSearchTarget,
    payload: searchTarget,
  }
}
