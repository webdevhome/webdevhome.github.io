import { LinkItem, onlyValidLinks } from '../../links'
import { AppActions } from '../actions'
import { HiddenLinksActionType } from './hiddenLinksActions'

export type HiddenLinksState = {
  links: Array<LinkItem['url']>
}

function getInitialState(): HiddenLinksState {
  return { links: [] }
}

export function hiddenLinks(
  state = getInitialState(),
  action: AppActions,
): HiddenLinksState {
  switch (action.type) {
    case HiddenLinksActionType.SetHiddenLinks: {
      return { ...state, links: action.payload.filter(onlyValidLinks) }
    }

    case HiddenLinksActionType.ToggleHiddenLink: {
      const hiddenLinks = state.links.includes(action.payload)
        ? state.links.filter((link) => link !== action.payload)
        : [...state.links, action.payload]

      return { ...state, links: hiddenLinks.filter(onlyValidLinks) }
    }

    case HiddenLinksActionType.ToggleHiddenLinkGroup: {
      if (action.payload.every((link) => state.links.includes(link))) {
        // Group is already entirely hidden. Remove all of them from
        // `hiddenLinks`, which makes all of them visible again.
        return {
          ...state,
          links: state.links
            .filter((link) => !action.payload.includes(link))
            .filter(onlyValidLinks),
        }
      }

      // At least some links in this group are visible. In this case,
      // first get all links that are visible, then add them to `hiddenLinks`.
      const missingLinks = action.payload.filter(
        (link) => !state.links.includes(link),
      )

      return {
        ...state,
        links: [...state.links, ...missingLinks].filter(onlyValidLinks),
      }
    }

    default: {
      return state
    }
  }
}
