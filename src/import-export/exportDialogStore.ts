import { atom, readonlyType } from 'nanostores'
import type { StoreObject } from '../utils/nanostores.ts'

const $showDialog = atom(false)

export const exportDialogStore = {
  $showDialog: readonlyType($showDialog),

  openDialog() {
    $showDialog.set(true)
  },
  closeDialog() {
    $showDialog.set(false)
  },
} satisfies StoreObject
