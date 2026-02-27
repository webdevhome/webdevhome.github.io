import { RefObject, useRef } from 'react'
import { useAppSelector } from '../../stores'
import {
  createGlobalState,
  GlobalReactStore,
  useGlobalState,
} from '../../stores/createGlobalState'

const showDialogState = createGlobalState(false)

export type DataExport = {
  showDialogState: GlobalReactStore<boolean>
  exportJSON: string
  textareaRef: RefObject<HTMLTextAreaElement>
}

export function useDataExport(): DataExport {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const hiddenLinks = useAppSelector((state) => state.hiddenLinks.links)

  return {
    showDialogState: useGlobalState(showDialogState),
    exportJSON: JSON.stringify(hiddenLinks),
    textareaRef,
  }
}
