import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import { negate } from '../utils/negate.ts'
import { booleanConverter, storageMapping } from '../utils/storageMapping.ts'

const showDescriptionsStorageMapping = storageMapping(
  'wdh:show-descriptions',
  false,
  booleanConverter,
)
const $showDescriptions = atom(showDescriptionsStorageMapping.read())
$showDescriptions.subscribe(showDescriptionsStorageMapping.write)

export function toggleShowDescriptions(): void {
  $showDescriptions.update(negate)
}

export function useShowDescriptions(): boolean {
  return useAtom($showDescriptions)
}
