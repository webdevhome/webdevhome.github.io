import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { booleanEncoder } from '../utils/nanostores.ts'

const $showBackground = persistentAtom(
  'wdh:show-background',
  false,
  booleanEncoder,
)

export function toggleBackgroundImage() {
  $showBackground.set(!$showBackground.get())
}

export function useShowBackground(): boolean {
  return useStore($showBackground)
}
