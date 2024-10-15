import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { loadHiddenLinks } from '../services/localStorage/values/hiddenLinks'
import { loadShowDescriptionsSetting } from '../services/localStorage/values/showDescriptionsSetting'
import { loadThemeSetting } from '../services/localStorage/values/themeSetting'
import { appMode } from './appMode/appModeReducer'
import { appSettings } from './appSettings/appSettingsReducer'
import { hiddenLinks } from './hiddenLinks/hiddenLinksReducer'
import { persistToLocalStorage } from './persistToLocalStorage'
import { search } from './search/searchReducer'
import { loadShowJumpLinksSetting } from '../services/localStorage/values/showJumpLinksSetting'
import { loadShowBackgroundSetting } from '../services/localStorage/values/showBackgroundSetting'

const rootReducer = combineReducers({
  appMode,
  hiddenLinks,
  search,
  appSettings,
})

export const store = createStore(rootReducer, {
  hiddenLinks: { links: loadHiddenLinks() },
  appSettings: {
    theme: loadThemeSetting(),
    showDescriptions: loadShowDescriptionsSetting(),
    showJumpLinks: loadShowJumpLinksSetting(),
    showJumpLinksMobile: false,
    showBackground: loadShowBackgroundSetting(),
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__?.())

persistToLocalStorage(store)

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
