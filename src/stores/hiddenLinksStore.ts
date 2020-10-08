import { createReactHook, createStore } from '@alinnert/tstate'
import { getHiddenLinks, setHiddenLinks } from '../services/localStorageService'

// #region store
export interface HiddenLinks {
  links: string[]
}

const initialState: HiddenLinks = {
  links: getHiddenLinks(),
}

const hiddenLinksStore = createStore<HiddenLinks>(initialState)
export const useHiddenLinks = createReactHook(hiddenLinksStore)
// #endregion store

// #region mutations
const mutations = {
  addUrl: (link: string): void => {
    const links = hiddenLinksStore.state.links.concat(link)
    hiddenLinksStore.set({ links })
    setHiddenLinks(links)
  },

  removeUrl: (link: string): void => {
    const links = hiddenLinksStore.state.links.filter((it) => it !== link)
    hiddenLinksStore.set({ links })
    setHiddenLinks(links)
  },
}
// #endregion mutations

// #region actions
export function toggleLink(url: string): void {
  if (hiddenLinksStore.state.links.includes(url)) {
    mutations.removeUrl(url)
  } else {
    mutations.addUrl(url)
  }
}
// #endregion actions
