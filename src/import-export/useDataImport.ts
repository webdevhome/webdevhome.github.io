import { useAtom } from '@xoid/react'
import { atom } from 'xoid'
import { setHiddenUrls } from '../links/hiddenUrlsStore.ts'

const $showDialog = atom(false)
const $importJSON = atom('')
const $importError = atom<string | null>(null)

export type DataImport = {
  showDialog: boolean
  setShowDialog: (value: boolean) => void
  importJSON: string
  setImportJSON: (value: string) => void
  importError: string | null
  applyImport: () => void
}

export function useDataImport(): DataImport {
  const showDialog = useAtom($showDialog)
  const importJSON = useAtom($importJSON)
  const importError = useAtom($importError)

  function applyImport(): void {
    $importError.set(null)

    try {
      if (importJSON.trim() === '') {
        throw new Error('Input is empty.')
      }
      const importData: unknown = JSON.parse(importJSON)
      if (!Array.isArray(importData)) {
        throw new TypeError('Data is not an array.')
      }
      if (importData.some((it) => typeof it !== 'string')) {
        throw new Error('Every element in the array must be a string.')
      }

      setHiddenUrls(importData)
    } catch (error: unknown) {
      if (!Error.isError(error)) {
        $importError.set('Unknown error parsing data.')
      } else if (error instanceof SyntaxError) {
        $importError.set('Input is not valid JSON.')
      } else {
        $importError.set(error.message)
      }
    }
  }

  return {
    showDialog,
    setShowDialog: $showDialog.set,
    importJSON,
    setImportJSON: $importJSON.set,
    importError,
    applyImport,
  }
}
