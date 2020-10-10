import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { loadHiddenLinks, saveHiddenLinks } from '../services/localStorage/values/hiddenLinks'

export interface HiddenLinksContextValue {
  hiddenLinks: string[]
  setHiddenLinks: Dispatch<SetStateAction<string[]>>
  toggleHiddenLink: (url: string) => void
}

export const HiddenLinksContext = createContext<HiddenLinksContextValue | null>(
  null
)

export function useHiddenLinksContextValue(): HiddenLinksContextValue {
  const [hiddenLinks, setHiddenLinks] = useState<string[]>(loadHiddenLinks())

  function toggleHiddenLink(urlToToggle: string): void {
    const newHiddenLinks = hiddenLinks.includes(urlToToggle)
      ? hiddenLinks.filter((url) => url !== urlToToggle)
      : [...hiddenLinks, urlToToggle]
    setHiddenLinks(newHiddenLinks)
    saveHiddenLinks(newHiddenLinks)
  }

  return {
    hiddenLinks,
    setHiddenLinks,
    toggleHiddenLink,
  }
}
