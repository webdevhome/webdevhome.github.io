import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { booleanEncoder, negateBooleanStore } from '../utils/nanostores.ts'

const $openLinksInNewTabSetting = persistentAtom(
  'wdh:open-links-in-new-tab',
  false,
  booleanEncoder,
)

export function toggleOpenLinksInNewTab() {
  negateBooleanStore($openLinksInNewTabSetting)
}

export function useOpenLinksInNewTab() {
  return useStore($openLinksInNewTabSetting)
}

export function isOpenLinksInNewTabEnabled(): boolean {
  return $openLinksInNewTabSetting.value
}
