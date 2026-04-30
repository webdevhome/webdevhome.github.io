import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import { negate } from '../utils/negate.ts'
import { booleanConverter, storageMapping } from '../utils/storageMapping.ts'

const showJumpLinksStorageMapping = storageMapping(
  'wdh:show-jump-links',
  true,
  booleanConverter,
)
const $showJumpLinksSetting = atom(showJumpLinksStorageMapping.read())
$showJumpLinksSetting.subscribe(showJumpLinksStorageMapping.write)

export function toggleJumpLinks(): void {
  $showJumpLinksSetting.update(negate)
}

const $showJumpLinksMobileSetting = atom(false)

export function toggleJumpLinksMobile() {
  $showJumpLinksMobileSetting.update(negate)
}

export function setShowJumpLinksMobile(value: boolean): void {
  $showJumpLinksMobileSetting.set(value)
}

export function useShowJumpLinks(): boolean {
  return useAtom($showJumpLinksSetting)
}

export function useShowJumpLinksMobile(): boolean {
  return useAtom($showJumpLinksMobileSetting)
}
