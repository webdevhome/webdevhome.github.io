import { MenuSection } from '@headlessui/react'
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react'
import { FC } from 'react'
import { AppMenuHeader } from '../Header/AppMenuHeader'
import { AppMenuItem } from '../Header/AppMenuItem'
import { useThemeSwitcher } from './useThemeSwitcher'

export const AppThemeSwitcher: FC = () => {
  const themeSwitcher = useThemeSwitcher()

  return (
    <MenuSection className="flex flex-col gap-y-1">
      <AppMenuHeader title="Theme" />
      <AppMenuItem
        label="Light"
        icon={<SunIcon />}
        selected={themeSwitcher.isLightTheme}
        action={themeSwitcher.setLightTheme}
      />
      <AppMenuItem
        label="Dark"
        icon={<MoonIcon />}
        selected={themeSwitcher.isDarkTheme}
        action={themeSwitcher.setDarkTheme}
      />
      <AppMenuItem
        label="System"
        icon={<SunMoonIcon />}
        selected={themeSwitcher.isAutoTheme}
        action={themeSwitcher.setAutoTheme}
      />
    </MenuSection>
  )
}
