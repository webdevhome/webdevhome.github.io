import { createStore, createReactHook } from '@alinnert/tstate'

type Mode = 'default' | 'search' | 'customize'

interface CurrentMode {
  mode: Mode
}

const initialState: CurrentMode = {
  mode: 'default'
}

const currentModeStore = createStore<CurrentMode>(initialState)
export const useCurrentMode = createReactHook(currentModeStore)

export function setMode (mode: Mode): void {
  currentModeStore.set({ mode })
}

export function toggleMode (mode: Mode): void {
  currentModeStore.set({
    mode: currentModeStore.state.mode === mode ? 'default' : mode
  })
}
