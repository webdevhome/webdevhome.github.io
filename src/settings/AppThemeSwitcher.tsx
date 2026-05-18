import { useStore } from '@nanostores/react'
import { MoonIcon, SunIcon, SunMoonIcon, WallpaperIcon } from 'lucide-react'
import { type FC } from 'react'
import { UiMenuDivider } from '../ui/UiMenuDivider.tsx'
import { UiMenuHeader } from '../ui/UiMenuHeader.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import { UiMenuSection } from '../ui/UiMenuSection.tsx'
import { themeStore } from './themeStore.ts'
import { showBackgroundStore } from './useBackgroundImage.ts'
import { useIsCurrentTheme } from './useIsCurrentTheme.ts'

export const AppThemeSwitcher: FC = () => {
  const isCurrentTheme = useIsCurrentTheme()
  const showBackground = useStore(showBackgroundStore.$show)

  return (
    <UiMenuSection>
      <UiMenuHeader title="Theme" />
      <UiMenuItem
        label="Light"
        icon={<SunIcon />}
        selected={isCurrentTheme('light')}
        closeOnAction={false}
        action={() => themeStore.setThemeSetting('light')}
      />
      <UiMenuItem
        label="Dark"
        icon={<MoonIcon />}
        selected={isCurrentTheme('dark')}
        closeOnAction={false}
        action={() => themeStore.setThemeSetting('dark')}
      />
      <UiMenuItem
        label="System"
        icon={<SunMoonIcon />}
        selected={isCurrentTheme('auto')}
        closeOnAction={false}
        action={() => themeStore.setThemeSetting('auto')}
      />
      <UiMenuDivider />
      <UiMenuItem
        label="Colorful background"
        icon={<WallpaperIcon />}
        selected={showBackground}
        closeOnAction={false}
        action={showBackgroundStore.toggle}
      />
    </UiMenuSection>
  )
}
