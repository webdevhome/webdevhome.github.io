import { AppSettingsActions, AppSettingsActionType } from './appSettingsActions'

export enum AppTheme {
  auto = 'auto',
  light = 'light',
  dark = 'dark',
}

type AppSettingsState = {
  theme: AppTheme
  showDescriptions: boolean
  showJumpLinks: boolean
  showJumpLinksMobile: boolean
  showBackground: boolean
  openLinksInNewTab: boolean
}

const initialState: AppSettingsState = {
  theme: AppTheme.auto,
  showDescriptions: false,
  showJumpLinks: true,
  showJumpLinksMobile: false,
  showBackground: false,
  openLinksInNewTab: false,
}

export function appSettings(
  state = initialState,
  action: AppSettingsActions,
): AppSettingsState {
  switch (action.type) {
    case AppSettingsActionType.SetTheme: {
      return { ...state, theme: action.payload }
    }

    case AppSettingsActionType.SetDisplayDescription: {
      return { ...state, showDescriptions: action.payload }
    }

    case AppSettingsActionType.SetDisplayJumpLinks: {
      return { ...state, showJumpLinks: action.payload }
    }

    case AppSettingsActionType.SetDisplayJumpLinksMobile: {
      return { ...state, showJumpLinksMobile: action.payload }
    }

    case AppSettingsActionType.SetDisplayBackground: {
      return { ...state, showBackground: action.payload }
    }

    case AppSettingsActionType.SetOpenLinksInNewTab: {
      return { ...state, openLinksInNewTab: action.payload }
    }

    default: {
      return state
    }
  }
}
