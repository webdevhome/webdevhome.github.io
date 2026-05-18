import { useStore } from '@nanostores/react'
import { type ChangeEvent, type FC } from 'react'
import { useEnableGlobalEvents } from '../app/useEnableGlobalEvents.ts'
import { UiButton } from '../ui/UiButton.tsx'
import { UiDialog } from '../ui/UiDialog.tsx'
import { UiTextarea } from '../ui/UiTextarea.tsx'
import { applyImport } from './applyImport.ts'
import { importDialogStore } from './importDialogStore.ts'

export const ImportDialog: FC = () => {
  const showDialog = useStore(importDialogStore.$showDialog)
  const dialogMessage = useStore(importDialogStore.$message)
  const importJSON = useStore(importDialogStore.$importJSON)

  useEnableGlobalEvents(!showDialog)

  function handleOnTextareaChange(
    event: ChangeEvent<HTMLTextAreaElement, Element>,
  ) {
    importDialogStore.resetMessage()
    importDialogStore.setImportJSON(event.target.value)
  }

  return (
    <UiDialog
      title="Import data from clipboard"
      isOpen={showDialog}
      onClose={importDialogStore.closeDialog}
      message={dialogMessage}
      leftButtons={
        <>
          <UiButton
            onClick={() =>
              navigator.clipboard
                .readText()
                .then(importDialogStore.setImportJSON)
            }
          >
            Paste from clipboard
          </UiButton>
          <UiButton onClick={() => importDialogStore.setImportJSON('')}>
            Clear input
          </UiButton>
        </>
      }
      rightButtons={
        <UiButton
          onClick={applyImport}
          type="primary"
          disabled={importJSON.trim() === ''}
        >
          Import data
        </UiButton>
      }
    >
      <UiTextarea
        className="font-mono text-sm"
        value={importJSON}
        onChange={handleOnTextareaChange}
        placeholder={`Supported formats:\n\n- New ID based JSON array.\n  Example: ["github","gitlab"]\n\n- Old URL based JSON array.\n  Example: ["https://github.com","https://gitlab.com"]`}
      ></UiTextarea>
    </UiDialog>
  )
}
