import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { contextProviderWarning } from './utils'

export enum AppMode {
  default,
  search,
  customize,
}

export interface CurrentModeContextValue {
  currentMode: AppMode
  setCurrentMode: Dispatch<SetStateAction<AppMode>>
  toggleMode: (mode: AppMode) => void
  isCurrentMode: (...modes: AppMode[]) => boolean
}

export const CurrentModeContext = createContext<CurrentModeContextValue>({
  currentMode: AppMode.default,
  setCurrentMode: contextProviderWarning,
  toggleMode: contextProviderWarning,
  isCurrentMode: contextProviderWarning,
})

export function useCurrentModeContextValue(): CurrentModeContextValue {
  const [currentMode, setCurrentMode] = useState<AppMode>(AppMode.default)

  function toggleMode(mode: AppMode): void {
    setCurrentMode(mode === currentMode ? AppMode.default : mode)
  }

  function isCurrentMode(...modes: AppMode[]): boolean {
    return modes.includes(currentMode)
  }

  return {
    currentMode,
    setCurrentMode,
    toggleMode,
    isCurrentMode,
  }
}
