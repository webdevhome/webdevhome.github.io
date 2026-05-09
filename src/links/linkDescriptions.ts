import { persistentAtom } from '@nanostores/persistent'
import { readonlyType } from 'nanostores'
import {
  booleanEncoder,
  negateBooleanStore,
  type StoreObject,
} from '../utils/nanostores.ts'

const $show = persistentAtom('wdh:show-descriptions', false, booleanEncoder)

export const linkDescriptionsStore = {
  $show: readonlyType($show),

  toggle() {
    negateBooleanStore($show)
  },
} satisfies StoreObject
