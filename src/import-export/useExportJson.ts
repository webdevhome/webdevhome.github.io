import { useStore } from '@nanostores/react'
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'

export function useExportJson(): string {
  const hiddenLinks = useStore(hiddenLinksStore.$hiddenLinks)

  const hiddenLinkIds = hiddenLinks.values().map((l) => l.id)
  return JSON.stringify(Array.from(hiddenLinkIds))
}
