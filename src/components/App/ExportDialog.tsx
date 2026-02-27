import { FC } from 'react'
import { AppButton } from './AppButton'
import { AppDialog } from './AppDialog'
import { AppDialogFooter } from './AppDialogFooter'
import { AppTextarea } from './AppTextarea'
import { useDataExport } from './useDataExport'

export const ExportDialog: FC = () => {
  const dataExport = useDataExport()

  const [showDialog, setShowDialog] = dataExport.showDialogState

  return (
    <AppDialog
      title="Export data to clipboard"
      isOpen={showDialog}
      onClose={() => setShowDialog(false)}
      footer={
        <AppDialogFooter
          leftButtons={
            <AppButton
              onClick={() => {
                dataExport.textareaRef.current?.select()
              }}
            >
              Select text
            </AppButton>
          }
          rightButtons={
            <>
              <AppButton onClick={() => setShowDialog(false)}>Close</AppButton>
              <AppButton
                onClick={() =>
                  navigator.clipboard.writeText(dataExport.exportJSON)
                }
                type="primary"
              >
                Copy to clipboard
              </AppButton>
            </>
          }
        />
      }
    >
      <AppTextarea
        className="font-mono"
        value={dataExport.exportJSON}
        readonly
        ref={dataExport.textareaRef}
      ></AppTextarea>
    </AppDialog>
  )
}
