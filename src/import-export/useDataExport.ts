import { useAtom } from '@xoid/react'
import { type RefObject, useRef } from 'react'
import { atom } from 'xoid'
import { useHiddenUrls } from '../links/hiddenUrlsStore.ts'

const $showDialog = atom(false)

export type DataExport = {
  showDialog: boolean
  setShowDialog: (value: boolean) => void
  exportJSON: string
  textareaRef: RefObject<HTMLTextAreaElement | null>
}

export function useDataExport(): DataExport {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const showDialog = useAtom($showDialog)
  const hiddenUrls = useHiddenUrls()

  const exportJSON = JSON.stringify(hiddenUrls)

  return {
    showDialog,
    setShowDialog: $showDialog.set,
    exportJSON,
    textareaRef,
  }
}
