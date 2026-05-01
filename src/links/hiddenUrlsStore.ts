import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import {
  arrayConverter,
  storageMapping,
  type StorageValueConverter,
} from '../utils/storageMapping.ts'
import { allLinks, links, type LinkGroup, type LinkItem } from './links.ts'

const hiddenUrlsStorageMapping = storageMapping(
  'wdh:hidden-items',
  [],
  arrayConverter as StorageValueConverter<LinkItem['url'][]>,
)
const $hiddenUrls = atom(hiddenUrlsStorageMapping.read(), (state) => ({
  toggleUrl(url: LinkItem['url']): void {
    state.update((oldState): LinkItem['url'][] => {
      if (oldState.includes(url)) {
        return oldState.filter((u) => u !== url)
      } else {
        return [...oldState, url]
      }
    })
  },

  toggleUrls(urls: LinkItem['url'][]): void {
    state.update((oldState): LinkItem['url'][] => {
      if (urls.some((u) => oldState.includes(u))) {
        return oldState.filter((u) => !urls.includes(u))
      } else {
        const urlsToAdd = urls.filter((u) => !oldState.includes(u))
        return [...oldState, ...urlsToAdd]
      }
    })
  },
}))
$hiddenUrls.subscribe(hiddenUrlsStorageMapping.write)

const $hiddenUrlsCount = atom((read) => read($hiddenUrls).length)

export function isUrlHidden(url: LinkItem['url']): boolean {
  return $hiddenUrls.value.includes(url)
}

export function setHiddenUrls(urls: LinkItem['url'][]): void {
  $hiddenUrls.set(urls)
}

export function toggleUrl(url: LinkItem['url']): void {
  $hiddenUrls.actions.toggleUrl(url)
}

export function toggleUrls(urls: LinkItem['url'][]): void {
  $hiddenUrls.actions.toggleUrls(urls)
}

export function showAllUrls(): void {
  $hiddenUrls.set([])
}

export function hideAllUrls(): void {
  $hiddenUrls.set(allLinks.map((l) => l.url))
}

export function useHiddenUrls(): LinkItem['url'][] {
  return useAtom($hiddenUrls)
}

export function useVisibleLinkGroups(): LinkGroup[] {
  const hiddenUrls = useAtom($hiddenUrls)

  return links.items.filter((group) => {
    return group.items.some((link) => !hiddenUrls.includes(link.url))
  })
}

export function useHiddenUrlsCount(): number {
  return useAtom($hiddenUrlsCount)
}

export function useAllUrlsAreHidden(urls: LinkItem['url'][]): boolean {
  const hiddenUrls = useAtom($hiddenUrls)

  return urls.every((u) => hiddenUrls.includes(u))
}
