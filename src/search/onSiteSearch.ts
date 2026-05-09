import { atom, readonlyType } from 'nanostores'
import type { SearchTarget } from '../links/links.ts'
import type { StoreObject } from '../utils/nanostores.ts'

const $onSiteSearchTerm = atom('')
const $searchTarget = atom<SearchTarget | null>(null)

export const onSiteSearchStore = {
  $searchTerm: readonlyType($onSiteSearchTerm),
  $searchTarget: readonlyType($searchTarget),

  setSearchTerm(term: string = '') {
    $onSiteSearchTerm.set(term)
  },

  setSearchTarget(target: SearchTarget | null = null) {
    $searchTarget.set(target)
  },
} satisfies StoreObject
