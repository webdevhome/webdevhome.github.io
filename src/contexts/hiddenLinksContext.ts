import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { LinkItem } from '../links'
import {
  loadHiddenLinks,
  saveHiddenLinks
} from '../services/localStorage/values/hiddenLinks'

export interface HiddenLinksContextValue {
  hiddenLinks: string[]
  setLinks: Dispatch<SetStateAction<string[]>>
  toggleLink: (url: string, status?: LinkState) => void
  toggleGroup: (state: LinkState, ...urls: Array<LinkItem['url']>) => void
  allLinksAreHidden: (...links: LinkItem[]) => boolean
}

export const HiddenLinksContext = createContext<HiddenLinksContextValue | null>(
  null
)

export type LinkState = 'show' | 'hide'

export function useHiddenLinksContextValue(): HiddenLinksContextValue {
  const [hiddenLinks, setLinks] = useState<string[]>(loadHiddenLinks())

  function toggleLink(urlToToggle: LinkItem['url']): void {
    const newHiddenLinks = hiddenLinks.includes(urlToToggle)
      ? hiddenLinks.filter((url) => url !== urlToToggle)
      : [...hiddenLinks, urlToToggle]

    setLinks(newHiddenLinks)
    saveHiddenLinks(newHiddenLinks)
  }

  function toggleGroup(
    state: LinkState,
    ...urls: Array<LinkItem['url']>
  ): void {
    const newHiddenLinks =
      state === 'show'
        ? hiddenLinks.filter((url) => !urls.includes(url))
        : [
            ...hiddenLinks,
            ...urls.filter((link) => !hiddenLinks.includes(link)),
          ]

    setLinks(newHiddenLinks)
    saveHiddenLinks(newHiddenLinks)
  }

  function allLinksAreHidden(...links: LinkItem[]): boolean {
    return links.every((link) => hiddenLinks.includes(link.url))
  }

  return { hiddenLinks, setLinks, toggleLink, toggleGroup, allLinksAreHidden }
}
