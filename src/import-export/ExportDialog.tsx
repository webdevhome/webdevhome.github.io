import { type FC } from 'react'
import { AppButton } from '../ui/AppButton.tsx'
import { AppDialog } from '../ui/AppDialog.tsx'
import { AppDialogFooter } from '../ui/AppDialogFooter.tsx'
import { AppTextarea } from '../ui/AppTextarea.tsx'
import { useDataExport } from './useDataExport.ts'

export const ExportDialog: FC = () => {
  const { exportJSON, textareaRef, showDialog, setShowDialog } = useDataExport()

  const close = () => setShowDialog(false)

  return (
    <AppDialog
      title="Export data to clipboard"
      isOpen={showDialog}
      onClose={close}
      footer={
        <AppDialogFooter
          leftButtons={
            <AppButton
              onClick={() => {
                textareaRef.current?.select()
              }}
            >
              Select text
            </AppButton>
          }
          rightButtons={
            <>
              <AppButton onClick={close}>Close</AppButton>
              <AppButton
                onClick={() => navigator.clipboard.writeText(exportJSON)}
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
        value={exportJSON}
        readonly
        ref={textareaRef}
      ></AppTextarea>
    </AppDialog>
  )
}
