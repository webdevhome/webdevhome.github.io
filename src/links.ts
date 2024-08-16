import { useMemo } from 'react'
import linksData from './links.json'
import { OptionalExceptFor } from './utilityTypes'

export type LinkItem = {
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

export type TailwindColorName =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'

export type LinkGroup = {
  name: string
  color?: TailwindColorName
  items: LinkItem[]
}

export type Links = {
  items: LinkGroup[]
}

export const links: Links = {
  items: linksData.items as LinkGroup[],
}

export function useAllLinks(): LinkItem[] {
  const allLinks = useMemo(() => {
    return links.items.flatMap((group) => group.items)
  }, [])

  return allLinks
}
