import { ChangeEvent, FC } from 'react'
import { AppButton } from './AppButton'
import { AppDialog } from './AppDialog'
import { AppDialogFooter } from './AppDialogFooter'
import { AppTextarea } from './AppTextarea'
import { useDataImport } from './useDataImport'

export const ImportDialog: FC = () => {
  const dataImport = useDataImport()

  const [showDialog, setShowDialog] = dataImport.showDialogState
  const [importJSON, setImportJSON] = dataImport.importJSONState
  const [importError] = dataImport.importErrorState

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
              <AppButton onClick={dataImport.applyImport} type="primary">
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
