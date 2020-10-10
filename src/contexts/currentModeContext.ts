import { createContext, Dispatch, SetStateAction, useState } from 'react'

export enum AppMode {
  default,
  search,
  customize,
}

export interface CurrentModeContextValue {
  currentMode: AppMode
  setCurrentMode: Dispatch<SetStateAction<AppMode>>
  toggleMode: (mode: AppMode) => void
  isCurrentMode: (...mode: AppMode[]) => boolean
}

export const CurrentModeContext = createContext<CurrentModeContextValue | null>(
  null
)

export function useCurrentModeContextValue(): CurrentModeContextValue {
  const [currentMode, setCurrentMode] = useState<AppMode>(AppMode.default)

  function toggleMode(mode: AppMode): void {
    if (mode === currentMode) {
      setCurrentMode(AppMode.default)
    } else {
      setCurrentMode(mode)
    }
  }

  function isCurrentMode(...mode: AppMode[]): boolean {
    return mode.includes(currentMode)
  }

  return {
    currentMode,
    setCurrentMode,
    toggleMode,
    isCurrentMode,
  }
}
