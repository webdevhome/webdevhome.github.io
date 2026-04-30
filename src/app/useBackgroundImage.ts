import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import { negate } from '../utils/negate.ts'
import { booleanConverter, storageMapping } from '../utils/storageMapping.ts'

const showBackgroundStorageMapping = storageMapping(
  'wdh:show-background',
  false,
  booleanConverter,
)
const $showBackground = atom(showBackgroundStorageMapping.read())
$showBackground.subscribe(showBackgroundStorageMapping.write)

export function toggleBackgroundImage() {
  $showBackground.update(negate)
}

export function useShowBackground(): boolean {
  return useAtom($showBackground)
}
