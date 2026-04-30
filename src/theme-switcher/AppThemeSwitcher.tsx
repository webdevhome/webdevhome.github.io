import { MenuSection } from '@headlessui/react'
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react'
import { type FC } from 'react'
import { AppMenuHeader } from '../header/AppMenuHeader.tsx'
import { AppMenuItem } from '../header/AppMenuItem.tsx'
import { appTheme, isCurrentTheme, setTheme } from './themes.ts'

export const AppThemeSwitcher: FC = () => {
  return (
    <MenuSection className="flex flex-col gap-y-1">
      <AppMenuHeader title="Theme" />
      <AppMenuItem
        label="Light"
        icon={<SunIcon />}
        selected={isCurrentTheme(appTheme.light)}
        action={() => setTheme(appTheme.light)}
      />
      <AppMenuItem
        label="Dark"
        icon={<MoonIcon />}
        selected={isCurrentTheme(appTheme.dark)}
        action={() => setTheme(appTheme.dark)}
      />
      <AppMenuItem
        label="System"
        icon={<SunMoonIcon />}
        selected={isCurrentTheme(appTheme.auto)}
        action={() => setTheme(appTheme.auto)}
      />
    </MenuSection>
  )
}
