import { SettingsIcon } from 'lucide-react'
import { type FC } from 'react'
import { AppMenu } from '../header/AppMenu.tsx'
import { AppImportExportMenuItems } from '../import-export/AppImportExportMenuItems.tsx'
import { AppThemeSwitcher } from '../theme-switcher/AppThemeSwitcher.tsx'
import { AppInfo } from './AppInfo.tsx'
import { AppSettings } from './AppSettings.tsx'

export const AppSettingsMenu: FC = () => {
  return (
    <AppMenu icon={<SettingsIcon />} label="Options">
      <AppSettings />
      <AppThemeSwitcher />
      <AppImportExportMenuItems />
      <AppInfo />
    </AppMenu>
  )
}
