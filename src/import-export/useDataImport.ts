import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import { allLinks } from '../links/links.ts'
import { isStringArray } from '../utils/isStringArray.ts'

const $showDialog = atom(false)
const $importJSON = atom('')
const $importError = atom<string | null>(null)

const urlRegex = /^https?:\/\//

export type DataImport = {
  showDialog: boolean
  setShowDialog: (value: boolean) => void
  importJSON: string
  setImportJSON: (value: string) => void
  importError: string | null
  applyImport: () => void
}

export function useDataImport(): DataImport {
  const showDialog = useStore($showDialog)
  const importJSON = useStore($importJSON)
  const importError = useStore($importError)

  function applyImport() {
    $importError.set(null)

    try {
      if (importJSON.trim() === '') {
        throw new Error('Input is empty.')
      }

      const importedArray: unknown = JSON.parse(importJSON)
      if (!isStringArray(importedArray)) {
        throw new Error('Every element in the array must be a string.')
      }

      if (importedArray.length === 0) return

      const hiddenLinks = allLinks.values().filter((link) => {
        // If imported data is of old URL based format (app version < 4)
        if (urlRegex.exec(importedArray[0]) !== null) {
          return importedArray.includes(link.url)
        }

        // If imported data is of current ID based format (app version >= 4)
        return importedArray.includes(link.id)
      })

      hiddenLinksStore.set(hiddenLinks)
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
