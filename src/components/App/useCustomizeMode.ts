import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setAppMode, toggleAppMode } from '../../stores/appMode/appModeActions'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'

export type UseCustomizeModeResult = {
  handleCustomizeAction: () => void
}

export function useCustomizeMode(): UseCustomizeModeResult {
  const dispatch = useAppDispatch()
  const isCurrentAppMode = useIsCurrentAppMode()
  const currentAppMode = useAppSelector((state) => state.appMode.currentMode)

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeydown)

    function handleGlobalKeydown(event: KeyboardEvent): void {
      if (event.key === 'Escape' && isCurrentAppMode(AppMode.customize)) {
        dispatch(setAppMode(AppMode.default))
      }
    }

    return () => {
      document.removeEventListener('keydown', handleGlobalKeydown)
    }
  }, [dispatch, isCurrentAppMode])

  const handleCustomizeAction = useCallback((): void => {
    dispatch(toggleAppMode(AppMode.customize, currentAppMode))
  }, [currentAppMode, dispatch])

  return { handleCustomizeAction }
}
