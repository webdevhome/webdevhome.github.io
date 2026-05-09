import { type SimpleIcon } from 'simple-icons'
import { linksData } from '../data.ts'
import type { TailwindColorName } from '../tailwindCss.ts'
import { brandedString, type BrandedString } from '../utilityTypes.ts'

//#region Category types
export type CategoryId = BrandedString<'category-id'>

export type Category = {
  id: CategoryId
  title: string
  color: TailwindColorName
}
//#endregion

//#region LinkItem types
export type LinkId = BrandedString<'link-id'>
export type LinkUrl = BrandedString<'link-url'>
export type LinkSearchUrl = BrandedString<'link-search-url'>

export type LinkItem = {
  id: LinkId
  title: string
  url: LinkUrl
  description?: string
  searchUrl?: LinkSearchUrl
  color?: string
  icon?: SimpleIcon
}

export type SearchTarget = Omit<LinkItem, 'searchUrl'> &
  Required<Pick<LinkItem, 'searchUrl'>>

export type LinksMap = Map<Category, LinkItem[]>
//#endregion

//#region LinksData types
export type LinkDefinition = {
  title: string
  url: string
  description?: string
  icon?: SimpleIcon
  color?: string
  searchUrl?: string
}

export type GroupDefinition = {
  title: string
  color: TailwindColorName
  links: Record<string, LinkDefinition>
}

export type LinksData = Record<string, GroupDefinition>
//#endregion

//#region data
export const categoryToLinksMap = ((): Map<Category, LinkItem[]> => {
  const result = Object.entries(linksData).map(
    ([groupId, groupDefinition]): [Category, LinkItem[]] => {
      const { links: linksDefinition, ...groupRest } = groupDefinition

      const group: Category = { id: brandedString(groupId), ...groupRest }

      const links: LinkItem[] = Object.entries(linksDefinition).map(
        ([linkId, linkDefinition]): LinkItem => {
          const { url, searchUrl, ...linkRest } = linkDefinition

          const link: LinkItem = {
            id: brandedString(linkId),
            url: brandedString(url),
            ...linkRest,
          }

          if (searchUrl !== undefined) {
            link.searchUrl = brandedString(searchUrl)
          }

          return link
        },
      )

      return [group, links]
    },
  )

  return new Map(result)
})()

export const allCategories = new Set<Category>(categoryToLinksMap.keys())

export const allCategoryIds = new Set<CategoryId>(
  allCategories.values().map((c) => c.id),
)

export const linksToCategoryMap: Map<LinkItem, Category> = (() => {
  const result = new Map<LinkItem, Category>()

  for (const [category, links] of categoryToLinksMap.entries()) {
    for (const link of links) {
      result.set(link, category)
    }
  }

  return result
})()

export const allLinks = new Set<LinkItem>(linksToCategoryMap.keys())

export const allLinksCount = allLinks.size

export const allLinkIds = new Set<LinkId>(allLinks.values().map((l) => l.id))
//#endregion

//#region functions
export function linkIsSearchTarget(link: LinkItem): link is SearchTarget {
  return typeof link.searchUrl === 'string'
}
//#endregion exports
