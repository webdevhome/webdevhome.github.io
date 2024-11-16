import { allLinks, type LinkItem } from '@/lib/links/links'
import { difference, isSubset, union, without } from 'es-toolkit'
import { computed, ref, watch } from 'vue'

const storageKey = 'wdh:hidden-items'
const hiddenLinkUrlsFromStorage: string[] = JSON.parse(localStorage.getItem(storageKey) ?? '')
const hiddenLinkUrls = ref(hiddenLinkUrlsFromStorage)

watch(hiddenLinkUrls, (newHiddenLinks) => {
  localStorage.setItem(storageKey, JSON.stringify(newHiddenLinks))
})

export const hiddenLinks = computed(() => {
  const result: LinkItem[] = []

  for (const link of allLinks) {
    if (hiddenLinkUrls.value.includes(link.url)) {
      result.push(link)
    }
  }

  return result
})

export function isHiddenLinkUrl(url: string): boolean {
  return hiddenLinkUrls.value.includes(url)
}

export function toggleHiddenLink(url: string) {
  if (hiddenLinkUrls.value.includes(url)) {
    hiddenLinkUrls.value = without(hiddenLinkUrls.value, url)
    return
  }

  hiddenLinkUrls.value.push(url)
}

export function toggleHiddenLinksGroup(urls: string[]) {
  if (isSubset(hiddenLinkUrls.value, urls)) {
    hiddenLinkUrls.value = difference(hiddenLinkUrls.value, urls)
  } else {
    hiddenLinkUrls.value = union(hiddenLinkUrls.value, urls)
  }
}
