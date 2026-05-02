import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { booleanEncoder, negateBooleanStore } from '../utils/nanostores.ts'

const $showBackground = persistentAtom(
  'wdh:show-background',
  false,
  booleanEncoder,
)

export function toggleBackgroundImage() {
  negateBooleanStore($showBackground)
}

export function useShowBackground(): boolean {
  return useStore($showBackground)
}
