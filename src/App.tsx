import {
  mdiFormatListChecks,
  mdiMagnify,
  mdiThemeLightDark,
  mdiWeatherNight,
  mdiWeatherSunny
} from '@mdi/js'
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { version } from '../package.json'
import './App.scss'
import { AppFooter } from './components/Footer/AppFooter'
import { FooterDivider } from './components/Footer/FooterDivider'
import { FooterGroup } from './components/Footer/FooterGroup'
import { FooterLink } from './components/Footer/FooterLink'
import { AppAction } from './components/Header/AppAction'
import { AppActions } from './components/Header/AppActions'
import { AppHeader } from './components/Header/AppHeader'
import { AppContent } from './components/Layout/AppContent'
import { LinkGroup } from './components/Links/LinkGroup'
import { Search } from './components/Search/Search'
import {
  AppMode,
  CurrentModeContext,
  CurrentModeContextValue,
  useCurrentModeContextValue
} from './contexts/currentModeContext'
import {
  HiddenLinksContext,
  useHiddenLinksContextValue
} from './contexts/hiddenLinksContext'
import { links } from './links'
import {
  loadThemeSetting,
  saveThemeSetting
} from './services/localStorage/values/themeSetting'

export const WebdevHome: FC = () => {
  const currentModeContextValue = useCurrentModeContextValue()
  const hiddenLinksContextValue = useHiddenLinksContextValue()

  const customizeMode = useCustomizeMode({ currentModeContextValue })
  const searchMode = useSearchMode({ currentModeContextValue })
  const themeSwitcher = useThemeSwitcher()

  const { isCurrentMode } = currentModeContextValue

  return (
    <CurrentModeContext.Provider value={currentModeContextValue}>
      <HiddenLinksContext.Provider value={hiddenLinksContextValue}>
        <div className="app">
          <AppHeader />

          <AppActions>
            <AppAction
              icon={mdiMagnify}
              action={searchMode.handleSearchAction}
              active={isCurrentMode(AppMode.search)}
            />
            <AppAction
              icon={themeSwitcher.icon}
              action={themeSwitcher.switchTheme}
              active={false}
            />
            <AppAction
              icon={mdiFormatListChecks}
              action={customizeMode.handleCustomizeAction}
              active={isCurrentMode(AppMode.customize)}
            />
          </AppActions>

          {isCurrentMode(AppMode.default, AppMode.customize) ? (
            <AppContent>
              {links.items.map((group) => (
                <LinkGroup group={group} key={group.name} />
              ))}
            </AppContent>
          ) : (
            <Search
              searchTerm={searchMode.searchTerm}
              setSearchTerm={searchMode.setSearchTerm}
            />
          )}

          <AppFooter>
            <FooterGroup title={'WebdevHome v' + version}>
              <FooterLink
                text="Changelog"
                url="https://github.com/webdevhome/webdevhome.github.io/releases"
              />
              <FooterLink
                text="GitHub"
                url="https://github.com/webdevhome/webdevhome.github.io"
              />
            </FooterGroup>

            <FooterDivider />

            <FooterGroup title="Icons">
              <FooterLink
                text="Material Design Icons"
                url="https://materialdesignicons.com"
              />
              <FooterLink text="Simple Icons" url="https://simpleicons.org/" />
            </FooterGroup>
          </AppFooter>
        </div>
      </HiddenLinksContext.Provider>
    </CurrentModeContext.Provider>
  )
}

// #region customize feature
interface UseCustomizeModeParams {
  currentModeContextValue: CurrentModeContextValue
}

interface UseCustomizeModeReturn {
  handleCustomizeAction: () => void
}

function useCustomizeMode({
  currentModeContextValue,
}: UseCustomizeModeParams): UseCustomizeModeReturn {
  const { isCurrentMode, setCurrentMode, toggleMode } = currentModeContextValue

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeydown)

    function handleGlobalKeydown(event: KeyboardEvent): void {
      if (event.key === 'Escape' && isCurrentMode(AppMode.customize)) {
        setCurrentMode(AppMode.default)
      }
    }

    return () => {
      document.removeEventListener('keydown', handleGlobalKeydown)
    }
  }, [isCurrentMode, setCurrentMode])

  const handleCustomizeAction = useCallback((): void => {
    toggleMode(AppMode.customize)
  }, [toggleMode])

  return { handleCustomizeAction }
}
// #endregion customize feature

// #region search feature
interface UseSearchModeParams {
  currentModeContextValue: CurrentModeContextValue
}

interface UseSearchModeReturn {
  handleSearchAction: () => void
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

function useSearchMode({
  currentModeContextValue,
}: UseSearchModeParams): UseSearchModeReturn {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { isCurrentMode, setCurrentMode, toggleMode } = currentModeContextValue

  const handleGlobalKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (isCurrentMode(AppMode.default)) {
        if (event.key === '\n') {
          return
        }

        setSearchTerm(event.key)
        setCurrentMode(AppMode.search)
      }
    },
    [isCurrentMode, setCurrentMode]
  )

  useEffect(() => {
    window.addEventListener('keypress', handleGlobalKeypress)

    return () => {
      window.removeEventListener('keypress', handleGlobalKeypress)
    }
  }, [handleGlobalKeypress, isCurrentMode, setCurrentMode])

  const handleSearchAction = useCallback((): void => {
    setSearchTerm('')
    toggleMode(AppMode.search)
  }, [toggleMode])

  return { handleSearchAction, searchTerm, setSearchTerm }
}
// #endregion search feature

// #region theme switcher
export const themeStates = ['auto', 'light', 'dark'] as const
export type ThemeState = typeof themeStates[number]

interface UseThemeSwitcherReturn {
  icon: string
  switchTheme: () => void
}

function useThemeSwitcher(): UseThemeSwitcherReturn {
  const [themeState, setThemeState] = useState<ThemeState>(loadThemeSetting())

  const bodyElement = useMemo(
    () => globalThis.document.getElementsByTagName('body')[0],
    []
  )

  useEffect(() => {
    saveThemeSetting(themeState)
    bodyElement.className = `${themeState}-theme`
  }, [bodyElement.className, themeState])

  const icon = useMemo((): string => {
    if (themeState === 'light') {
      return mdiWeatherSunny
    }
    if (themeState === 'dark') {
      return mdiWeatherNight
    }
    return mdiThemeLightDark
  }, [themeState])

  const switchTheme = useCallback((): void => {
    switch (themeState) {
      case 'light':
        setThemeState('dark')
        break
      case 'dark':
        setThemeState('auto')
        break
      default:
        setThemeState('light')
        break
    }
  }, [themeState])

  return { icon, switchTheme }
}
// #endregion theme switcher
