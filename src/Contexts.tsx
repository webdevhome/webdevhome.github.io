import React, { memo, ReactNode } from 'react'
import {
  CurrentModeContext,
  useCurrentModeContextValue
} from './contexts/currentModeContext'
import {
  HiddenLinksContext,
  useHiddenLinksContextValue
} from './contexts/hiddenLinksContext'

interface Props {
  children?: ReactNode
}

export const Contexts = memo<Props>(function Contexts({ children }) {
  const currentModeContextValue = useCurrentModeContextValue()
  const hiddenLinksContextValue = useHiddenLinksContextValue()

  return (
    <CurrentModeContext.Provider value={currentModeContextValue}>
      <HiddenLinksContext.Provider value={hiddenLinksContextValue}>
        {children}
      </HiddenLinksContext.Provider>
    </CurrentModeContext.Provider>
  )
})
