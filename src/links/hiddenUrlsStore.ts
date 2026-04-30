import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import { allLinks, type LinkItem } from './links.ts'
import {
  arrayConverter,
  storageMapping,
  type StorageValueConverter,
} from '../utils/storageMapping.ts'

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

export function allUrlsAreHidden(urls: LinkItem['url'][]): boolean {
  return urls.every((u) => $hiddenUrls.value.includes(u))
}

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

export function useHiddenUrlsCount(): number {
  return useAtom($hiddenUrlsCount)
}
