import { SearchTarget } from '../../links'
import { AppActions } from '../actions'
import { AppModeActionType } from '../appMode/appModeActions'
import { SearchActionType } from './searchActions'

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
    case SearchActionType.SetSearchTerm: {
      return { ...state, searchTerm: action.payload }
    }

    case SearchActionType.SetOnSiteSearchTerm: {
      return { ...state, onSiteSearchTerm: action.payload }
    }

    case SearchActionType.SetCurrentSearchTarget: {
      return { ...state, onSiteSearchTerm: '', searchTarget: action.payload }
    }

    case AppModeActionType.SetMode: {
      return getInitialState()
    }

    default: {
      return state
    }
  }
}
