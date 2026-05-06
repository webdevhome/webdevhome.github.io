import type { SimpleIcon } from 'simple-icons'
import { defineLinks } from '../data.ts'
import type { TailwindColorName } from '../tailwindCss.ts'

//#region types
export type Category = {
  id: string
  title: string
  color: TailwindColorName
}

export type LinkItem = {
  id: string
  title: string
  url: string
  description?: string
  searchUrl?: string
  color?: string
  icon?: SimpleIcon
}

export type SearchTarget = Omit<LinkItem, 'searchUrl'> &
  Required<Pick<LinkItem, 'searchUrl'>>

export type LinksMap = Map<Category, LinkItem[]>
//#endregion types

//#region exports
export const categoryToLinksMap = defineLinks<LinksMap>(new Map())

export const linksToCategoryMap: Map<LinkItem, Category> = (() => {
  const result = new Map<LinkItem, Category>()

  for (const [category, links] of categoryToLinksMap.entries()) {
    for (const link of links) {
      result.set(link, category)
    }
  }

  return result
})()

export const linksSet = new Set<LinkItem>(linksToCategoryMap.keys())

export function linkIsSearchTarget(link: LinkItem): link is SearchTarget {
  return typeof link.searchUrl === 'string'
}
//#endregion exports
