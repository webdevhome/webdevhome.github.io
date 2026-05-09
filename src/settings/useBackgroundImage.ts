import { persistentAtom } from '@nanostores/persistent'
import { readonlyType } from 'nanostores'
import {
  booleanEncoder,
  negateBooleanStore,
  type StoreObject,
} from '../utils/nanostores.ts'

const $showBackground = persistentAtom(
  'wdh:show-background',
  false,
  booleanEncoder,
)

export const showBackgroundStore = {
  $show: readonlyType($showBackground),

  toggle() {
    negateBooleanStore($showBackground)
  },
} satisfies StoreObject
