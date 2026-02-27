import { useState } from 'react'
import { useAppDispatch } from '../../stores'
import {
  createGlobalState,
  GlobalReactStore,
  useGlobalState,
} from '../../stores/createGlobalState'
import { setHiddenLinks } from '../../stores/hiddenLinks/hiddenLinksActions'
import { ReactState } from '../../typings/react'

const showDialogState = createGlobalState(false)

export type DataImport = {
  showDialogState: GlobalReactStore<boolean>
  importJSONState: ReactState<string>
  importErrorState: ReactState<string | null>
  applyImport: () => void
}

export function useDataImport(): DataImport {
  const dispatch = useAppDispatch()

  const [importJSON, setImportJSON] = useState('')
  const [importError, setImportError] = useState<string | null>(null)

  function applyImport(): void {
    setImportError(null)

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

      dispatch(setHiddenLinks(importData))
    } catch (error: unknown) {
      if (!Error.isError(error)) {
        setImportError('Unknown error parsing data.')
      } else if (error instanceof SyntaxError) {
        setImportError('Input is not valid JSON.')
      } else {
        setImportError(error.message)
      }
    }
  }

  return {
    showDialogState: useGlobalState(showDialogState),
    importJSONState: [importJSON, setImportJSON],
    importErrorState: [importError, setImportError],
    applyImport,
  }
}
