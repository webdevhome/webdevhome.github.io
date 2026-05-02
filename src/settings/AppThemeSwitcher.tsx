import { MenuSection } from '@headlessui/react'
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react'
import { type FC } from 'react'
import { UiMenuHeader } from '../ui/UiMenuHeader.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import { isCurrentTheme, setTheme } from './themes.ts'

export const AppThemeSwitcher: FC = () => {
  return (
    <MenuSection className="flex flex-col gap-y-1">
      <UiMenuHeader title="Theme" />
      <UiMenuItem
        label="Light"
        icon={<SunIcon />}
        selected={isCurrentTheme('light')}
        action={() => setTheme('light')}
      />
      <UiMenuItem
        label="Dark"
        icon={<MoonIcon />}
        selected={isCurrentTheme('dark')}
        action={() => setTheme('dark')}
      />
      <UiMenuItem
        label="System"
        icon={<SunMoonIcon />}
        selected={isCurrentTheme('auto')}
        action={() => setTheme('auto')}
      />
    </MenuSection>
  )
}
