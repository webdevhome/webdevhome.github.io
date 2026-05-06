import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import { booleanEncoder, negateBooleanStore } from '../utils/nanostores.ts'

const $showJumpLinksSetting = persistentAtom(
  'wdh:show-jump-links',
  true,
  booleanEncoder,
)

export function toggleJumpLinks() {
  negateBooleanStore($showJumpLinksSetting)
}

const $showJumpLinksMobileSetting = atom(false)

export function toggleJumpLinksMobile() {
  negateBooleanStore($showJumpLinksMobileSetting)
}

export function setShowJumpLinksMobile(value: boolean) {
  $showJumpLinksMobileSetting.set(value)
}

export function useShowJumpLinks(): boolean {
  return useStore($showJumpLinksSetting)
}

export function useShowJumpLinksMobile(): boolean {
  return useStore($showJumpLinksMobileSetting)
}
