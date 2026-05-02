import { SettingsIcon } from 'lucide-react'
import { type FC } from 'react'
import { UiMenu } from '../ui/UiMenu.tsx'
import { AppImportExportMenuItems } from '../import-export/AppImportExportMenuItems.tsx'
import { AppThemeSwitcher } from './AppThemeSwitcher.tsx'
import { AppInfo } from '../header/AppInfo.tsx'
import { AppSettings } from './AppSettings.tsx'

export const AppSettingsMenu: FC = () => {
  return (
    <UiMenu icon={<SettingsIcon />} label="Options">
      <AppSettings />
      <AppThemeSwitcher />
      <AppImportExportMenuItems />
      <AppInfo />
    </UiMenu>
  )
}
