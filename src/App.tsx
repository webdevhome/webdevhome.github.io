import { mdiFormatListChecks, mdiMagnify, mdiThemeLightDark, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { AppAction } from './components/AppAction'
import { AppActions } from './components/AppActions'
import { AppContent } from './components/AppContent'
import { AppFooter } from './components/AppFooter'
import { AppHeader } from './components/AppHeader'
import { FooterDivider } from './components/FooterDivider'
import { FooterLink } from './components/FooterLink'
import { FooterText } from './components/FooterText'
import { LinkList } from './components/LinkList'
import { Search } from './components/Search'
import { links } from './links'
import { getThemeStateSetting, setThemeStateSetting } from './services/localStorageService'
import { AppMode, setMode, toggleMode, useCurrentMode } from './stores/currentModeStore'
import { HiddenLinks, useHiddenLinks } from './stores/hiddenLinksStore'

export const WebdevHome: FC = () => {
  const { mode } = useCurrentMode()
  const { handleCustomizeAction, hiddenLinks } = useCustomizeMode()
  const { handleSearchAction, latestKeypress } = useSearchMode()
  const { themeSwitcherIcon, handleThemeSwitcherAction } = useThemeSwitcher()

  return (
    <div className="app">
      <AppHeader />

      <AppActions>
        <AppAction
          icon={mdiMagnify}
          action={handleSearchAction}
          active={mode === AppMode.search}
        />
        <AppAction
          icon={themeSwitcherIcon}
          action={handleThemeSwitcherAction}
          active={false}
        />
        <AppAction
          icon={mdiFormatListChecks}
          action={handleCustomizeAction}
          active={mode === AppMode.customize}
        />
      </AppActions>

      {mode === AppMode.default || mode === AppMode.customize ? (
        <AppContent>
          <LinkList links={links.items} hiddenLinks={hiddenLinks.links} />
        </AppContent>
      ) : (
        <Search latestKeypress={latestKeypress} />
      )}

      <AppFooter>
        <FooterText>
          This list is curated by <a href="https://github.com/alinnert">Andreas Linnert</a>
        </FooterText>
        <FooterLink
          text="GitHub"
          url="https://github.com/webdevhome/webdevhome.github.io"
        />
        <FooterLink
          text="Latest changes"
          url="https://github.com/webdevhome/webdevhome.github.io/releases"
        />
        <FooterDivider/>
        <FooterText>Used icons:</FooterText>
        <FooterLink
          text="Material Design Icons"
          url="https://materialdesignicons.com"
        />
        <FooterLink
          text="Simple Icons"
          url="https://simpleicons.org/"
        />
      </AppFooter>
    </div>
  )
}

// #region customize feature
interface UseCustomizeModeReturn {
  hiddenLinks: HiddenLinks
  handleCustomizeAction: () => void
}

function useCustomizeMode (): UseCustomizeModeReturn {
  const hiddenLinks = useHiddenLinks()
  const { mode } = useCurrentMode()

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeydown)

    function handleGlobalKeydown (event: KeyboardEvent): void {
      if (event.key === 'Escape' && mode === AppMode.customize) {
        setMode(AppMode.default)
      }
    }

    return () => {
      document.removeEventListener('keydown', handleGlobalKeydown)
    }
  }, [mode])

  const handleCustomizeAction = useCallback(
    (): void => { toggleMode(AppMode.customize) },
    []
  )

  return { hiddenLinks, handleCustomizeAction }
}
// #endregion customize feature

// #region search feature
interface UseSearchModeReturn {
  handleSearchAction: () => void
  latestKeypress: string
}

function useSearchMode (): UseSearchModeReturn {
  const [latestKeypress, setLatestKeypress] = useState<string>('')
  const { mode } = useCurrentMode()

  useEffect(() => {
    window.addEventListener('keypress', handleGlobalKeypress)

    function handleGlobalKeypress (event: KeyboardEvent): void {
      if (mode === AppMode.default) {
        if (event.key === '\n') { return }
        setLatestKeypress(event.key)
        setMode(AppMode.search)
      }
    }

    return (): void => {
      window.removeEventListener('keypress', handleGlobalKeypress)
    }
  }, [mode])

  const handleSearchAction = useCallback(
    (): void => {
      setLatestKeypress('')
      toggleMode(AppMode.search)
    },
    []
  )

  return { handleSearchAction, latestKeypress }
}
// #endregion search feature

// #region theme switcher
export const themeStates = ['auto', 'light', 'dark'] as const
export type ThemeState = typeof themeStates[number]

interface UseThemeSwitcherReturn {
  themeSwitcherIcon: string
  handleThemeSwitcherAction: () => void
}

function useThemeSwitcher (): UseThemeSwitcherReturn {
  const bodyElement = globalThis.document.getElementsByTagName('body')[0]
  const [themeState, setThemeState] =
    useState<ThemeState>(getThemeStateSetting())

  useEffect(
    () => {
      setThemeStateSetting(themeState)
      bodyElement.className = `${themeState}-theme`
    },
    [bodyElement.className, themeState]
  )

  const themeSwitcherIcon = useMemo(
    (): string => {
      if (themeState === 'light') { return mdiWeatherSunny }
      if (themeState === 'dark') { return mdiWeatherNight }
      return mdiThemeLightDark
    },
    [themeState]
  )

  const handleThemeSwitcherAction = useCallback(
    (): void => {
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
    },
    [themeState]
  )

  return { themeSwitcherIcon, handleThemeSwitcherAction }
}
// #endregion theme switcher
