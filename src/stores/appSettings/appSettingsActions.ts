import { AppTheme } from './appSettingsReducer'

export const enum SettingsActions {
  setTheme,
  setDisplayDescription,
  setDisplayJumpLinks,
  setDisplayJumpLinksMobile,
  setDisplayBackground,
  setOpenLinksInNewTab,
}

type SetThemeAction = {
  type: SettingsActions.setTheme
  payload: AppTheme
}

type SetDisplayDescriptionAction = {
  type: SettingsActions.setDisplayDescription
  payload: boolean
}

type SetDisplayJumpLinksAction = {
  type: SettingsActions.setDisplayJumpLinks
  payload: boolean
}

type SetDisplayJumpLinksMobileAction = {
  type: SettingsActions.setDisplayJumpLinksMobile
  payload: boolean
}

type SetDisplayBackgroundAction = {
  type: SettingsActions.setDisplayBackground
  payload: boolean
}

type SetOpenLinksInNewTabAction = {
  type: SettingsActions.setOpenLinksInNewTab
  payload: boolean
}

export type AppSettingsActions =
  | SetThemeAction
  | SetDisplayDescriptionAction
  | SetDisplayJumpLinksAction
  | SetDisplayJumpLinksMobileAction
  | SetDisplayBackgroundAction
  | SetOpenLinksInNewTabAction

export function setTheme(payload: AppTheme): SetThemeAction {
  return { type: SettingsActions.setTheme, payload }
}

export function setDisplayDescription(
  payload: boolean,
): SetDisplayDescriptionAction {
  return { type: SettingsActions.setDisplayDescription, payload }
}

export function setDisplayJumpLinks(
  payload: boolean,
): SetDisplayJumpLinksAction {
  return { type: SettingsActions.setDisplayJumpLinks, payload }
}

export function setDisplayJumpLinksMobile(
  payload: boolean,
): SetDisplayJumpLinksMobileAction {
  return { type: SettingsActions.setDisplayJumpLinksMobile, payload }
}

export function setDisplayBackground(
  payload: boolean,
): SetDisplayBackgroundAction {
  return { type: SettingsActions.setDisplayBackground, payload }
}

export function setOpenLinksInNewTab(
  payload: boolean,
): SetOpenLinksInNewTabAction {
  return { type: SettingsActions.setOpenLinksInNewTab, payload }
}
