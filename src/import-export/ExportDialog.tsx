import { type FC } from 'react'
import { useEnableGlobalEvents } from '../app/useEnableGlobalEvents.ts'
import { UiButton } from '../ui/UiButton.tsx'
import { UiDialog } from '../ui/UiDialog.tsx'
import { UiTextarea } from '../ui/UiTextarea.tsx'
import { useDataExport } from './useDataExport.ts'

export const ExportDialog: FC = () => {
  const { exportJSON, textareaRef, showDialog, setShowDialog } = useDataExport()

  useEnableGlobalEvents(!showDialog)

  return (
    <UiDialog
      title="Export data to clipboard"
      isOpen={showDialog}
      onClose={() => setShowDialog(false)}
      leftButtons={
        <UiButton
          onClick={() => {
            textareaRef.current?.select()
          }}
        >
          Select text
        </UiButton>
      }
      rightButtons={
        <>
          <UiButton onClick={close}>Close</UiButton>
          <UiButton
            onClick={() => navigator.clipboard.writeText(exportJSON)}
            type="primary"
          >
            Copy to clipboard
          </UiButton>
        </>
      }
    >
      <UiTextarea
        className="font-mono"
        value={exportJSON}
        readonly
        ref={textareaRef}
      ></UiTextarea>
    </UiDialog>
  )
}
