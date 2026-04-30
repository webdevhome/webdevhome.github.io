import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import { negate } from '../utils/negate.ts'
import { booleanConverter, storageMapping } from '../utils/storageMapping.ts'

const openLinksInNewTabStorageMapping = storageMapping(
  'wdh:open-links-in-new-tab',
  false,
  booleanConverter,
)
const $openLinksInNewTabSetting = atom(openLinksInNewTabStorageMapping.read())
$openLinksInNewTabSetting.subscribe(openLinksInNewTabStorageMapping.write)

export function toggleOpenLinksInNewTab() {
  $openLinksInNewTabSetting.update(negate)
}

export function useOpenLinksInNewTab() {
  return useAtom($openLinksInNewTabSetting)
}
