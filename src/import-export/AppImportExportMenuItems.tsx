import { MenuSection } from '@headlessui/react'
import { ClipboardCopyIcon, ClipboardPasteIcon } from 'lucide-react'
import { type FC } from 'react'
import { AppMenuHeader } from '../header/AppMenuHeader.tsx'
import { AppMenuItem } from '../header/AppMenuItem.tsx'
import { useDataExport } from './useDataExport.ts'
import { useDataImport } from './useDataImport.ts'

export const AppImportExportMenuItems: FC = () => {
  const dataImport = useDataImport()
  const dataExport = useDataExport()

  return (
    <MenuSection className="flex flex-col gap-y-1">
      <AppMenuHeader title="Hidden links data" />
      <AppMenuItem
        label="Import from clipboard..."
        icon={<ClipboardPasteIcon />}
        action={() => dataImport.setShowDialog(true)}
      />
      <AppMenuItem
        label="Export to clipboard..."
        icon={<ClipboardCopyIcon />}
        action={() => dataExport.setShowDialog(true)}
      />
    </MenuSection>
  )
}
