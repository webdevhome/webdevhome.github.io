import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadHiddenLinks } from '../services/localStorage/values/hiddenLinks'
import { loadShowDescriptionsSetting } from '../services/localStorage/values/showDescriptionsSetting'
import { loadThemeSetting } from '../services/localStorage/values/themeSetting'
import { appMode } from './appMode/appModeReducer'
import { appSettings } from './appSettings/appSettingsReducer'
import { hiddenLinks } from './hiddenLinks/hiddenLinksReducer'
import { persistToLocalStorage } from './persistToLocalStorage'
import { search } from './search/searchReducer'

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
    },
  },
  composeWithDevTools({ trace: true })()
)

persistToLocalStorage(store)

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
