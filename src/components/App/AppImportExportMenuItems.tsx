import { MenuSection } from '@headlessui/react'
import { ClipboardCopyIcon, ClipboardPasteIcon } from 'lucide-react'
import { FC } from 'react'
import { AppMenuHeader } from '../Header/AppMenuHeader'
import { AppMenuItem } from '../Header/AppMenuItem'
import { useDataExport } from './useDataExport'
import { useDataImport } from './useDataImport'

export const AppImportExportMenuItems: FC = () => {
  const dataImport = useDataImport()
  const dataExport = useDataExport()

  const [, setIsImportDialogOpen] = dataImport.showDialogState
  const [, setIsExportDialogOpen] = dataExport.showDialogState

  return (
    <MenuSection className="flex flex-col gap-y-1">
      <AppMenuHeader title="Data" />
      <AppMenuItem
        label="Import from clipboard"
        icon={<ClipboardPasteIcon />}
        action={() => setIsImportDialogOpen(true)}
      />
      <AppMenuItem
        label="Export to clipboard"
        icon={<ClipboardCopyIcon />}
        action={() => setIsExportDialogOpen(true)}
      />
    </MenuSection>
  )
}
