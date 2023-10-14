import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setAppMode, toggleAppMode } from '../../stores/appMode/appModeActions'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { setSearchTerm } from '../../stores/search/searchActions'

export interface UseSearchModeResult {
  handleSearchAction: () => void
}

export function useSearchMode(): UseSearchModeResult {
  const isCurrentAppMode = useIsCurrentAppMode()
  const currentAppMode = useAppSelector((state) => state.appMode.currentMode)
  const dispatch = useAppDispatch()

  const handleGlobalKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (isCurrentAppMode(AppMode.default)) {
        if (event.key === '\n') return
        if (event.key === ' ') return
        if (event.key.length !== 1) return
        dispatch(setAppMode(AppMode.search))
        dispatch(setSearchTerm(event.key))
      }
    },
    [dispatch, isCurrentAppMode],
  )

  useEffect(() => {
    globalThis.addEventListener('keypress', handleGlobalKeypress)

    return () => {
      globalThis.removeEventListener('keypress', handleGlobalKeypress)
    }
  }, [handleGlobalKeypress, isCurrentAppMode])

  const handleSearchAction = useCallback((): void => {
    dispatch(setSearchTerm(''))
    dispatch(toggleAppMode(AppMode.search, currentAppMode))
  }, [currentAppMode, dispatch])

  return { handleSearchAction }
}
