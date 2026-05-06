import { MenuSection } from '@headlessui/react'
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react'
import { type FC } from 'react'
import { UiMenuHeader } from '../ui/UiMenuHeader.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import { setTheme, useIsCurrentTheme } from './themes.ts'

export const AppThemeSwitcher: FC = () => {
  const isCurrentTheme = useIsCurrentTheme()

  return (
    <MenuSection className="flex flex-col gap-y-1">
      <UiMenuHeader title="Theme" />
      <UiMenuItem
        label="Light"
        icon={<SunIcon />}
        selected={isCurrentTheme('light')}
        closeOnAction={false}
        action={() => setTheme('light')}
      />
      <UiMenuItem
        label="Dark"
        icon={<MoonIcon />}
        selected={isCurrentTheme('dark')}
        closeOnAction={false}
        action={() => setTheme('dark')}
      />
      <UiMenuItem
        label="System"
        icon={<SunMoonIcon />}
        selected={isCurrentTheme('auto')}
        closeOnAction={false}
        action={() => setTheme('auto')}
      />
    </MenuSection>
  )
}
