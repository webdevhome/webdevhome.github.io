import { SearchTarget } from '../../links'
import { AppActions } from '../actions'
import { SET_MODE } from '../appMode/appModeActions'
import {
  SET_CURRENT_SEARCH_TARGET,
  SET_ON_SITE_SEARCH_TERM,
  SET_SEARCH_TERM,
} from './searchActions'

export type SearchState = {
  searchTerm: string
  onSiteSearchTerm: string
  searchTarget: SearchTarget | null
}

function getInitialState(): SearchState {
  return { searchTerm: '', onSiteSearchTerm: '', searchTarget: null }
}

export function search(
  state = getInitialState(),
  action: AppActions,
): SearchState {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload }
    }

    case SET_ON_SITE_SEARCH_TERM: {
      return { ...state, onSiteSearchTerm: action.payload }
    }

    case SET_CURRENT_SEARCH_TARGET: {
      return { ...state, onSiteSearchTerm: '', searchTarget: action.payload }
    }

    case SET_MODE: {
      return getInitialState()
    }

    default: {
      return state
    }
  }
}
