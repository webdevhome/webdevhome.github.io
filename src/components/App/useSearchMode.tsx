import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../stores'
import { setAppMode, toggleAppMode } from '../../stores/appMode/appModeActions'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { setSearchTerm } from '../../stores/search/searchActions'

export interface UseSearchModeReturn {
  handleSearchAction: () => void
}

export function useSearchMode(): UseSearchModeReturn {
  const isCurrentAppMode = useIsCurrentAppMode()
  const currentAppMode = useSelector(
    (state: AppState) => state.appMode.currentMode
  )
  const dispatch: AppDispatch = useDispatch()

  const handleGlobalKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (isCurrentAppMode(AppMode.default)) {
        if (event.key === '\n') return
        dispatch(setAppMode(AppMode.search))
        dispatch(setSearchTerm(event.key))
      }
    },
    [dispatch, isCurrentAppMode]
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
