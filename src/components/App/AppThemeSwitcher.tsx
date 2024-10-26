import { MenuSection } from '@headlessui/react'
import { mdiThemeLightDark, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'
import { FC } from 'react'
import { AppMenuHeader } from '../Header/AppMenuHeader'
import { AppMenuItem } from '../Header/AppMenuItem'
import { MdiIcon } from '../Icon/MdiIcon'
import { useThemeSwitcher } from './useThemeSwitcher'

export const AppThemeSwitcher: FC = () => {
  const themeSwitcher = useThemeSwitcher()

  return (
    <MenuSection className="flex flex-col gap-y-px">
      <AppMenuHeader title="Theme" />
      <AppMenuItem
        label="Light"
        icon={<MdiIcon path={mdiWeatherSunny} />}
        selected={themeSwitcher.isLightTheme}
        action={themeSwitcher.setLightTheme}
      />
      <AppMenuItem
        label="Dark"
        icon={<MdiIcon path={mdiWeatherNight} />}
        selected={themeSwitcher.isDarkTheme}
        action={themeSwitcher.setDarkTheme}
      />
      <AppMenuItem
        label="System"
        icon={<MdiIcon path={mdiThemeLightDark} />}
        selected={themeSwitcher.isAutoTheme}
        action={themeSwitcher.setAutoTheme}
      />
    </MenuSection>
  )
}
