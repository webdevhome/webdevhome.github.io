import { MenuSection } from '@headlessui/react'
import { ClipboardCopyIcon, ClipboardPasteIcon } from 'lucide-react'
import { type FC } from 'react'
import { UiMenuHeader } from '../ui/UiMenuHeader.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import { exportDialogStore } from './exportDialogStore.ts'
import { importDialogStore } from './importDialogStore.ts'

export const AppImportExportMenuItems: FC = () => {
  return (
    <MenuSection className="flex flex-col gap-y-1">
      <UiMenuHeader title="Hidden links data" />
      <UiMenuItem
        label="Import from clipboard..."
        icon={<ClipboardPasteIcon />}
        action={importDialogStore.openDialog}
      />
      <UiMenuItem
        label="Export to clipboard..."
        icon={<ClipboardCopyIcon />}
        action={exportDialogStore.openDialog}
      />
    </MenuSection>
  )
}
