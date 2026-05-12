import { useEffect } from 'react'
import { globalEventsStore } from './globalEvents.ts'

export function useEnableGlobalEvents(enabled: boolean) {
  useEffect(() => {
    globalEventsStore.setEnableEvents(enabled)
  }, [enabled])
}
