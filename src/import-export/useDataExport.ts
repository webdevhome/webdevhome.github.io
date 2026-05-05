import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import { type RefObject, useRef } from 'react'
import { useHiddenUrls } from '../links/hiddenUrls.ts'
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
  const hiddenUrls = useHiddenUrls()

  const setEncoder = makeSetEncoder<string>()
  const exportJSON = setEncoder.encode(hiddenUrls) ?? ''

  return {
    showDialog,
    setShowDialog: $showDialog.set,
    exportJSON,
    textareaRef,
  }
}
