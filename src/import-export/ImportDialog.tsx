import { type ChangeEvent, type FC } from 'react'
import { UiButton } from '../ui/UiButton.tsx'
import { UiDialog } from '../ui/UiDialog.tsx'
import { UiDialogFooter } from '../ui/UiDialogFooter.tsx'
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

  function handleImportDialogTextareaChange(
    event: ChangeEvent<HTMLTextAreaElement>,
  ) {
    setImportJSON(event.target.value)
  }

  return (
    <UiDialog
      title="Import data from clipboard"
      isOpen={showDialog}
      onClose={() => setShowDialog(false)}
      footer={
        <UiDialogFooter
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
              <UiButton onClick={() => setShowDialog(false)}>Close</UiButton>
              <UiButton onClick={applyImport} type="primary">
                Import data
              </UiButton>
            </>
          }
        />
      }
    >
      <UiTextarea
        className="font-mono"
        value={importJSON}
        onChange={handleImportDialogTextareaChange}
      ></UiTextarea>
    </UiDialog>
  )
}
