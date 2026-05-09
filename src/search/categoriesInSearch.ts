import { persistentAtom } from '@nanostores/persistent'
import { readonlyType } from 'nanostores'
import {
  booleanEncoder,
  negateBooleanStore,
  type StoreObject,
} from '../utils/nanostores.ts'

const $showCategoriesInSearch = persistentAtom(
  'wdh:show-categories-in-search',
  true,
  booleanEncoder,
)

export const showCategoriesInSearchStore = {
  $setting: readonlyType($showCategoriesInSearch),

  toggle() {
    negateBooleanStore($showCategoriesInSearch)
  },
} satisfies StoreObject
