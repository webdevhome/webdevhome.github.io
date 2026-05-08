import { useStore } from '@nanostores/react'
import { atom, computed } from 'nanostores'
import { allCategoryIds } from '../links/links.ts'

const $expandedLinkGroups = atom(new Set<string>())

export function useExpandedLinkGroups(): Set<string> {
  return useStore($expandedLinkGroups)
}

export function toggleExpandLinkGroup(id: string) {
  $expandedLinkGroups.set(
    $expandedLinkGroups.get().symmetricDifference(new Set([id])),
  )
}

export function collapseAllLinkGroups() {
  $expandedLinkGroups.set(new Set())
}

export function expandAllLinkGroups() {
  $expandedLinkGroups.set(new Set(allCategoryIds))
}

const $areAllLinkGroupsCollapsed = computed(
  $expandedLinkGroups,
  (expanded): boolean => {
    return expanded.size === 0
  },
)

export function useAreAllLinkGroupsCollapsed(): boolean {
  return useStore($areAllLinkGroupsCollapsed)
}

const $areAllLinkGroupsExpanded = computed(
  $expandedLinkGroups,
  (expanded): boolean => {
    return expanded.symmetricDifference(new Set(allCategoryIds)).size === 0
  },
)

export function useAreAllLinkGroupsExpanded(): boolean {
  return useStore($areAllLinkGroupsExpanded)
}