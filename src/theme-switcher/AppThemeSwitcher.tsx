import { MenuSection } from '@headlessui/react'
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react'
import { type FC } from 'react'
import { AppMenuHeader } from '../header/AppMenuHeader.tsx'
import { AppMenuItem } from '../header/AppMenuItem.tsx'
import { isCurrentTheme, setTheme } from './themes.ts'

export const AppThemeSwitcher: FC = () => {
  return (
    <MenuSection className="flex flex-col gap-y-1">
      <AppMenuHeader title="Theme" />
      <AppMenuItem
        label="Light"
        icon={<SunIcon />}
        selected={isCurrentTheme('light')}
        action={() => setTheme('light')}
      />
      <AppMenuItem
        label="Dark"
        icon={<MoonIcon />}
        selected={isCurrentTheme('dark')}
        action={() => setTheme('dark')}
      />
      <AppMenuItem
        label="System"
        icon={<SunMoonIcon />}
        selected={isCurrentTheme('auto')}
        action={() => setTheme('auto')}
      />
    </MenuSection>
  )
}
