import { MenuSection } from '@headlessui/react'
import { ClipboardCopyIcon, ClipboardPasteIcon } from 'lucide-react'
import { type FC } from 'react'
import { UiMenuHeader } from '../ui/UiMenuHeader.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import { useDataExport } from './useDataExport.ts'
import { useDataImport } from './useDataImport.ts'

export const AppImportExportMenuItems: FC = () => {
  const dataImport = useDataImport()
  const dataExport = useDataExport()

  return (
    <MenuSection className="flex flex-col gap-y-1">
      <UiMenuHeader title="Hidden links data" />
      <UiMenuItem
        label="Import from clipboard..."
        icon={<ClipboardPasteIcon />}
        action={() => dataImport.setShowDialog(true)}
      />
      <UiMenuItem
        label="Export to clipboard..."
        icon={<ClipboardCopyIcon />}
        action={() => dataExport.setShowDialog(true)}
      />
    </MenuSection>
  )
}
