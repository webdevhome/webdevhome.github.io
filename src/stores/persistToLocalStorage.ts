import { saveHiddenLinks } from '../services/localStorage/values/hiddenLinks'
import { saveShowBackgroundSetting } from '../services/localStorage/values/showBackgroundSetting'
import { saveShowDescriptionsSetting } from '../services/localStorage/values/showDescriptionsSetting'
import { saveShowJumpLinksSetting } from '../services/localStorage/values/showJumpLinksSetting'
import { saveThemeSetting } from '../services/localStorage/values/themeSetting'
import { AppState, AppStore } from './index'

type LastState = {
  hiddenLinks: AppState['hiddenLinks']['links'] | null
  themeSetting: AppState['appSettings']['theme'] | null
  showDescriptionsSetting: AppState['appSettings']['showDescriptions'] | null
  showJumpLinksSetting: AppState['appSettings']['showJumpLinks'] | null
  showBackgroundSetting: AppState['appSettings']['showBackground'] | null
}

const lastState: LastState = {
  hiddenLinks: null,
  themeSetting: null,
  showDescriptionsSetting: null,
  showJumpLinksSetting: null,
  showBackgroundSetting: null,
}

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

    const showDescriptionsSetting = state.appSettings.showDescriptions
    if (lastState.showDescriptionsSetting !== showDescriptionsSetting) {
      saveShowDescriptionsSetting(showDescriptionsSetting)
      lastState.showDescriptionsSetting = showDescriptionsSetting
    }

    const showJumpLinksSetting = state.appSettings.showJumpLinks
    if (lastState.showJumpLinksSetting !== showJumpLinksSetting) {
      saveShowJumpLinksSetting(showJumpLinksSetting)
      lastState.showJumpLinksSetting = showJumpLinksSetting
    }

    const showBackgroundSetting = state.appSettings.showBackground
    if (lastState.showBackgroundSetting !== showBackgroundSetting) {
      saveShowBackgroundSetting(showBackgroundSetting)
      lastState.showBackgroundSetting = showBackgroundSetting
    }
  })
}
