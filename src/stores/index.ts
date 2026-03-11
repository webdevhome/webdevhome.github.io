import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { loadHiddenLinks } from '../services/localStorage/values/hiddenLinks'
import { loadShowBackgroundSetting } from '../services/localStorage/values/showBackgroundSetting'
import { loadShowDescriptionsSetting } from '../services/localStorage/values/showDescriptionsSetting'
import { loadShowJumpLinksSetting } from '../services/localStorage/values/showJumpLinksSetting'
import { loadThemeSetting } from '../services/localStorage/values/themeSetting'
import { appMode } from './appMode/appModeReducer'
import { appSettings } from './appSettings/appSettingsReducer'
import { hiddenLinks } from './hiddenLinks/hiddenLinksReducer'
import { persistToLocalStorage } from './persistToLocalStorage'
import { search } from './search/searchReducer'
import { loadOpenLinksInNewTabSetting } from '../services/localStorage/values/openLinksInNewTab'

const rootReducer = combineReducers({
  appMode,
  hiddenLinks,
  search,
  appSettings,
})

export const store = createStore(
  rootReducer,
  {
    hiddenLinks: { links: loadHiddenLinks() },
    appSettings: {
      theme: loadThemeSetting(),
      showDescriptions: loadShowDescriptionsSetting(),
      showJumpLinks: loadShowJumpLinksSetting(),
      showJumpLinksMobile: false,
      showBackground: loadShowBackgroundSetting(),
      openLinksInNewTab: loadOpenLinksInNewTabSetting(),
    },
  },
  globalThis.__REDUX_DEVTOOLS_EXTENSION__?.(),
)

persistToLocalStorage(store)

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
