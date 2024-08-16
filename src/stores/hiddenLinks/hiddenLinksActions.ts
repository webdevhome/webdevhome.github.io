import { LinkItem } from '../../links'

export const SET_HIDDEN_LINKS = 'SET_HIDDEN_LINKS'
export const TOGGLE_HIDDEN_LINK = 'TOGGLE_HIDDEN_LINK'
export const TOGGLE_HIDDEN_LINKS_GROUP = 'TOGGLE_HIDDEN_LINKS_GROUP'

interface SetHiddenLinksAction {
  type: typeof SET_HIDDEN_LINKS
  payload: Array<LinkItem['url']>
}

interface ToggleHiddenLinkAction {
  type: typeof TOGGLE_HIDDEN_LINK
  payload: LinkItem['url']
}

interface ToggleHiddenLinksGroup {
  type: typeof TOGGLE_HIDDEN_LINKS_GROUP
  payload: Array<LinkItem['url']>
}

export type HiddenLinksActions =
  | SetHiddenLinksAction
  | ToggleHiddenLinkAction
  | ToggleHiddenLinksGroup

export function setHiddenLinks(
  links: Array<LinkItem['url']>,
): SetHiddenLinksAction {
  return { type: SET_HIDDEN_LINKS, payload: links }
}

export function toggleHiddenLink(
  link: LinkItem['url'],
): ToggleHiddenLinkAction {
  return { type: TOGGLE_HIDDEN_LINK, payload: link }
}

export function toggleHiddenLinksGroup(
  items: LinkItem[],
): ToggleHiddenLinksGroup {
  return { type: TOGGLE_HIDDEN_LINKS_GROUP, payload: items.map((i) => i.url) }
}
