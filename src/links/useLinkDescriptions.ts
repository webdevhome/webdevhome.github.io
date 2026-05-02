import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { booleanEncoder, negateBooleanStore } from '../utils/nanostores.ts'

const $showDescriptions = persistentAtom(
  'wdh:show-descriptions',
  false,
  booleanEncoder,
)

export function toggleShowDescriptions(): void {
  negateBooleanStore($showDescriptions)
}

export function useShowDescriptions(): boolean {
  return useStore($showDescriptions)
}
