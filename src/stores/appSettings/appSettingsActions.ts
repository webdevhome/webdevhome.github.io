import { AppTheme } from './appSettingsReducer'

export const enum SettingsActions {
  setTheme,
  setDisplayDescription,
}

interface SetThemeAction {
  type: SettingsActions.setTheme
  payload: AppTheme
}

interface SetDisplayDescriptionAction {
  type: SettingsActions.setDisplayDescription
  payload: boolean
}

export type AppSettingsActions = SetThemeAction | SetDisplayDescriptionAction

export function setTheme(payload: AppTheme): SetThemeAction {
  return { type: SettingsActions.setTheme, payload }
}

export function setDisplayDescription(
  payload: boolean
): SetDisplayDescriptionAction {
  return { type: SettingsActions.setDisplayDescription, payload }
}

export function cycleTheme(currentTheme: AppTheme): AppTheme {
  switch (currentTheme) {
    case AppTheme.auto: {
      return AppTheme.light
    }

    case AppTheme.light: {
      return AppTheme.dark
    }

    case AppTheme.dark: {
      return AppTheme.auto
    }
  }
}
