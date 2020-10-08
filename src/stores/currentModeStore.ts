import { createReactHook, createStore } from '@alinnert/tstate'

export enum AppMode {
  'default',
  'search',
  'customize',
}

interface CurrentMode {
  mode: AppMode
}

const initialState: CurrentMode = {
  mode: AppMode.default,
}

const currentModeStore = createStore<CurrentMode>(initialState)
export const useCurrentMode = createReactHook(currentModeStore)

export function setMode(mode: AppMode): void {
  currentModeStore.set({ mode })
}

export function toggleMode(mode: AppMode): void {
  currentModeStore.set({
    mode: currentModeStore.state.mode === mode ? AppMode.default : mode,
  })
}
