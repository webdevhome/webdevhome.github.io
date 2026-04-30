import { type ChangeEvent, type FC } from 'react'
import { AppButton } from '../ui/AppButton.tsx'
import { AppDialog } from '../ui/AppDialog.tsx'
import { AppDialogFooter } from '../ui/AppDialogFooter.tsx'
import { AppTextarea } from '../ui/AppTextarea.tsx'
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
  ): void {
    setImportJSON(event.target.value)
  }

  return (
    <AppDialog
      title="Import data from clipboard"
      isOpen={showDialog}
      onClose={() => setShowDialog(false)}
      footer={
        <AppDialogFooter
          message={importError}
          leftButtons={
            <>
              <AppButton
                onClick={() =>
                  navigator.clipboard.readText().then((t) => setImportJSON(t))
                }
              >
                Paste from clipboard
              </AppButton>
              <AppButton onClick={() => setImportJSON('')}>
                Clear input
              </AppButton>
            </>
          }
          rightButtons={
            <>
              <AppButton onClick={() => setShowDialog(false)}>Close</AppButton>
              <AppButton onClick={applyImport} type="primary">
                Import data
              </AppButton>
            </>
          }
        />
      }
    >
      <AppTextarea
        className="font-mono"
        value={importJSON}
        onChange={handleImportDialogTextareaChange}
      ></AppTextarea>
    </AppDialog>
  )
}
