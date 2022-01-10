import { useMemo } from 'react'
import linksData from './links.json'
import { OptionalExceptFor } from './utilityTypes'

export interface LinkItem {
  title: string
  url: string
  description?: string
  icon?: string
  color?: string
  iconComp?: JSX.Element
  searchUrl?: string
  searchConcat?: string
}

export type SearchTarget = OptionalExceptFor<
  LinkItem,
  'title' | 'url' | 'searchUrl'
>

export interface LinkGroup {
  name: string
  items: LinkItem[]
}

export interface Links {
  items: LinkGroup[]
}

export const links: Links = {
  items: linksData.items,
}

export function useAllLinks(): LinkItem[] {
  const allLinks = useMemo(() => {
    return links.items.flatMap((group) => group.items)
  }, [])

  return allLinks
}
