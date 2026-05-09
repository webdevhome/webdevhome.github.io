import { persistentAtom } from '@nanostores/persistent'
import { readonlyType } from 'nanostores'
import {
  booleanEncoder,
  negateBooleanStore,
  type StoreObject,
} from '../utils/nanostores.ts'

const $openLinksInNewTab = persistentAtom(
  'wdh:open-links-in-new-tab',
  false,
  booleanEncoder,
)

export const openLinksInNewTabStore = {
  $setting: readonlyType($openLinksInNewTab),

  toggle() {
    negateBooleanStore($openLinksInNewTab)
  },
} satisfies StoreObject
