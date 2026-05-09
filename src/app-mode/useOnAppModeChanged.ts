import type { ReadableAtom } from 'nanostores'
import { useEffect } from 'react'
import { appModeStore, type AppMode } from './appModeStore.ts'

type AppModeChangeListener = Parameters<ReadableAtom<AppMode>['listen']>[0]
export function useOnAppModeChanged(callback: AppModeChangeListener) {
  useEffect(() => appModeStore.appMode.listen(callback), [callback])
}
