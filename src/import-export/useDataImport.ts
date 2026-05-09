import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import { allLinks, type LinkItem } from '../links/links.ts'

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
  const showDialog = useStore($showDialog)
  const importJSON = useStore($importJSON)
  const importError = useStore($importError)

  function applyImport() {
    $importError.set(null)

    try {
      if (importJSON.trim() === '') {
        throw new Error('Input is empty.')
      }
      const importedLinkIds: unknown = JSON.parse(importJSON)
      if (!Array.isArray(importedLinkIds)) {
        throw new TypeError('Data is not an array.')
      }

      const isStringArray = (it: unknown[]): it is LinkItem['id'][] => {
        return it.every((el) => typeof el === 'string')
      }

      if (!isStringArray(importedLinkIds)) {
        throw new Error('Every element in the array must be a string.')
      }

      const hiddenLinks = allLinks
        .values()
        .filter((l) => importedLinkIds.includes(l.id))

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
