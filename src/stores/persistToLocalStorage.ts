import { saveHiddenLinks } from '../services/localStorage/values/hiddenLinks'
import { saveThemeSetting } from '../services/localStorage/values/themeSetting'
import { AppState, AppStore } from './index'

interface LastState {
  hiddenLinks: AppState['hiddenLinks']['links'] | null
  themeSetting: AppState['appSettings']['theme'] | null
}

const lastState: LastState = { hiddenLinks: null, themeSetting: null }

export function persistToLocalStorage(store: AppStore): void {
  store.subscribe(() => {
    const state = store.getState()

    const hiddenLinks = state.hiddenLinks.links
    if (lastState.hiddenLinks !== hiddenLinks) {
      saveHiddenLinks(hiddenLinks)
      lastState.hiddenLinks = hiddenLinks
    }

    const themeSetting = state.appSettings.theme
    if (lastState.themeSetting !== themeSetting) {
      saveThemeSetting(themeSetting)
      lastState.themeSetting = themeSetting
    }
  })
}
