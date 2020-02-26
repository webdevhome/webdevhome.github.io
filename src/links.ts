import linksData from './links.json'

export interface LinkItem {
  title: string
  url: string
  icon?: string
  color?: string
  iconComp?: JSX.Element
}

export interface LinkGroup {
  name: string
  items: LinkItem[]
}

export interface Links {
  items: LinkGroup[]
}

export const links: Links = {
  items: linksData.items
}

export function getAllLinks (): LinkItem[] {
  return links.items.flatMap(group => group.items)
}
