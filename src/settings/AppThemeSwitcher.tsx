import { MenuSection } from '@headlessui/react'
import { MoonIcon, SunIcon, SunMoonIcon, WallpaperIcon } from 'lucide-react'
import { type FC } from 'react'
import { UiMenuDivider } from '../ui/UiMenuDivider.tsx'
import { UiMenuHeader } from '../ui/UiMenuHeader.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import { setTheme, useIsCurrentTheme } from './themes.ts'
import {
  toggleBackgroundImage,
  useShowBackground,
} from './useBackgroundImage.ts'

export const AppThemeSwitcher: FC = () => {
  const isCurrentTheme = useIsCurrentTheme()
  const showBackground = useShowBackground()

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
      <UiMenuDivider />
      <UiMenuItem
        label="Colorful background"
        icon={<WallpaperIcon />}
        selected={showBackground}
        closeOnAction={false}
        action={toggleBackgroundImage}
      />
    </MenuSection>
  )
}
