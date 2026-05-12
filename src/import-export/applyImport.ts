import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import { isStringArray } from '../utils/isStringArray.ts'
import { pluralize } from '../utils/pluralize.ts'
import { getLinksFromUrlsOrIds } from './getLinksFromUrlsOrIds.ts'
import { importDialogStore } from './importDialogStore.ts'

export const urlRegex = /^https?:\/\//

export function applyImport() {
  const importJSON = importDialogStore.$importJSON.get()

  importDialogStore.resetMessage()

  try {
    if (importJSON.trim() === '') {
      throw new Error('Input is empty.')
    }

    const importedArray: unknown = JSON.parse(importJSON)
    if (!isStringArray(importedArray)) {
      throw new Error(
        'This JSON is not valid data. The JSON must be an array of link IDs or URLs.',
      )
    }

    const importedSet = new Set(importedArray)
    if (importedSet.size === 0) return

    const hiddenLinks = getLinksFromUrlsOrIds(importedSet)
    const hiddenLinksSet = new Set(hiddenLinks)
    const notImportedCount = importedSet.size - hiddenLinksSet.size

    if (hiddenLinksSet.size === 0 && notImportedCount > 0) {
      importDialogStore.setMessage(
        'warning',
        `You've tried to import ${importedSet.size} ${pluralize(importedSet.size, 'link', 'links')} but no links were found that match that data.`,
      )
      return
    }

    const notImportedMessage =
      notImportedCount > 0
        ? ` However, ${notImportedCount} ${pluralize(notImportedCount, 'link was', 'links were')} not imported because no matching links were found. Tipp: Export your current settings again to get updated data.`
        : ''

    hiddenLinksStore.set(hiddenLinksSet)
    importDialogStore.setImportJSON('')
    importDialogStore.setMessage(
      'success',
      `Links successfully imported. ${hiddenLinksSet.size} ${pluralize(hiddenLinksSet.size, 'link is', 'links are')} now hidden.${notImportedMessage}`,
    )
  } catch (error: unknown) {
    if (!Error.isError(error)) {
      importDialogStore.setMessage('error', 'Data could not be processed.')
    } else if (error instanceof SyntaxError) {
      importDialogStore.setMessage('error', 'Input is not valid JSON.')
    } else {
      importDialogStore.setMessage('error', error.message)
    }
  }
}
