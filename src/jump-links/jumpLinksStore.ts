import { persistentAtom } from '@nanostores/persistent'
import { atom, readonlyType } from 'nanostores'
import {
  booleanEncoder,
  negateBooleanStore,
  type StoreObject,
} from '../utils/nanostores.ts'

const $showJumpLinks = persistentAtom(
  'wdh:show-jump-links',
  true,
  booleanEncoder,
)

const $showJumpLinksMobile = atom(false)

export const jumpLinksStore = {
  $showJumpLinks: readonlyType($showJumpLinks),
  $showJumpLinksMobile: readonlyType($showJumpLinksMobile),

  toggleJumpLinks() {
    negateBooleanStore($showJumpLinks)
  },

  setShowJumpLinksMobile(value: boolean) {
    $showJumpLinksMobile.set(value)
  },

  toggleJumpLinksMobile() {
    negateBooleanStore($showJumpLinksMobile)
  },
} satisfies StoreObject
