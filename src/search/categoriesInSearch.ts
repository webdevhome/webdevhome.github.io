import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { booleanEncoder, negateBooleanStore } from '../utils/nanostores.ts'

const $showCategoriesInSearch = persistentAtom(
  'wdh:show-categories-in-search',
  true,
  booleanEncoder,
)

export function toggleShowCategoriesInSearch() {
  negateBooleanStore($showCategoriesInSearch)
}

export function useShowCategoriesInSearch(): boolean {
  return useStore($showCategoriesInSearch)
}
