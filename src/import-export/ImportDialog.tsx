import { type FC } from 'react'
import { useEnableGlobalEvents } from '../app/useEnableGlobalEvents.ts'
import { UiButton } from '../ui/UiButton.tsx'
import { UiDialog } from '../ui/UiDialog.tsx'
import { UiTextarea } from '../ui/UiTextarea.tsx'
import { useDataImport } from './useDataImport.ts'

export const ImportDialog: FC = () => {
  const {
    showDialog,
    setShowDialog,
    importJSON,
    setImportJSON,
    importError,
    applyImport,
  } = useDataImport()

  useEnableGlobalEvents(!showDialog)

  return (
    <UiDialog
      title="Import data from clipboard"
      isOpen={showDialog}
      onClose={() => setShowDialog(false)}
      message={importError}
      leftButtons={
        <>
          <UiButton
            onClick={() =>
              navigator.clipboard.readText().then((t) => setImportJSON(t))
            }
          >
            Paste from clipboard
          </UiButton>
          <UiButton onClick={() => setImportJSON('')}>Clear input</UiButton>
        </>
      }
      rightButtons={
        <>
          <UiButton disabled onClick={() => setShowDialog(false)}>
            Close
          </UiButton>
          <UiButton
            onClick={applyImport}
            type="primary"
            disabled={importJSON.trim() === ''}
          >
            Import data
          </UiButton>
        </>
      }
    >
      <UiTextarea
        className="font-mono"
        value={importJSON}
        onChange={(event) => setImportJSON(event.target.value)}
        placeholder={`Supported formats:\n\n- New ID based JSON array.\n  Example: ["github","gitlab"]\n\n- Old URL based JSON array.\n  Example: ["https://github.com","https://gitlab.com"]`}
      ></UiTextarea>
    </UiDialog>
  )
}
