import { EllipsisIcon } from 'lucide-react'
import { type FC } from 'react'
import { AppInfo } from '../header/AppInfo.tsx'
import { AppImportExportMenuItems } from '../import-export/AppImportExportMenuItems.tsx'
import { UiMenu } from '../ui/UiMenu.tsx'
import { AppSettings } from './AppSettings.tsx'
import { AppThemeSwitcher } from './AppThemeSwitcher.tsx'

export const AppSettingsMenu: FC = () => {
  return (
    <UiMenu icon={<EllipsisIcon />}>
      <AppSettings />
      <AppThemeSwitcher />
      <AppImportExportMenuItems />
      <AppInfo />
    </UiMenu>
  )
}
