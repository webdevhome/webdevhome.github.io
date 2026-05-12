import { atom, readonlyType } from 'nanostores'
import type { UiDialogMessage, UiDialogMessageType } from '../ui/UiDialog.tsx'
import type { StoreObject } from '../utils/nanostores.ts'

const $showDialog = atom(false)
const $dialogMessage = atom<UiDialogMessage>({ type: 'default', text: null })
const $importJSON = atom('')

export const importDialogStore = {
  $showDialog: readonlyType($showDialog),
  $message: readonlyType($dialogMessage),
  $importJSON: readonlyType($importJSON),

  openDialog() {
    $showDialog.set(true)
  },

  closeDialog() {
    $showDialog.set(false)
  },

  setMessage(type: UiDialogMessageType, text: string) {
    $dialogMessage.set({ type, text })
  },

  resetMessage() {
    $dialogMessage.set({ type: 'default', text: null })
  },

  setImportJSON(value: string) {
    $importJSON.set(value)
  },
} satisfies StoreObject
