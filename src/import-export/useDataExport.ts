import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import { type RefObject, useRef } from 'react'
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import { makeSetEncoder } from '../utils/nanostores.ts'

const $showDialog = atom(false)

export type DataExport = {
  showDialog: boolean
  setShowDialog: (value: boolean) => void
  exportJSON: string
  textareaRef: RefObject<HTMLTextAreaElement | null>
}

export function useDataExport(): DataExport {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const showDialog = useStore($showDialog)
  const hiddenLinks = useStore(hiddenLinksStore.$hiddenLinks)
  const hiddenLinkIds = new Set(hiddenLinks.values().map((l) => l.id))

  const setEncoder = makeSetEncoder<string>()
  const exportJSON = setEncoder.encode(hiddenLinkIds) ?? ''

  return {
    showDialog,
    setShowDialog: $showDialog.set,
    exportJSON,
    textareaRef,
  }
}
