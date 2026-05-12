import { useStore } from '@nanostores/react'
import { useRef, type FC } from 'react'
import { useEnableGlobalEvents } from '../app/useEnableGlobalEvents.ts'
import { UiButton } from '../ui/UiButton.tsx'
import { UiDialog } from '../ui/UiDialog.tsx'
import { UiTextarea } from '../ui/UiTextarea.tsx'
import { exportDialogStore } from './exportDialogStore.ts'
import { useExportJson } from './useExportJson.ts'

export const ExportDialog: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const showDialog = useStore(exportDialogStore.$showDialog)

  const exportJSON = useExportJson()

  useEnableGlobalEvents(!showDialog)

  return (
    <UiDialog
      title="Export data to clipboard"
      isOpen={showDialog}
      onClose={exportDialogStore.closeDialog}
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
        <UiButton
          onClick={() => navigator.clipboard.writeText(exportJSON)}
          type="primary"
        >
          Copy to clipboard
        </UiButton>
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
