import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setAppMode, toggleAppMode } from '../../stores/appMode/appModeActions'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { setSearchTerm } from '../../stores/search/searchActions'

export type UseSearchModeResult = {
  handleSearchAction: () => void
}

export function useSearchMode(): UseSearchModeResult {
  const isCurrentAppMode = useIsCurrentAppMode()
  const currentAppMode = useAppSelector((state) => state.appMode.currentMode)
  const dispatch = useAppDispatch()

  const handleGlobalKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (isCurrentAppMode(AppMode.default)) {
        if (event.key === '\n') return
        if (event.key === ' ') return
        if (event.key.length !== 1) return
        if (event.ctrlKey) return
        if (event.altKey) return
        if (event.metaKey) return
        dispatch(setAppMode(AppMode.search))
        dispatch(setSearchTerm(event.key))
      }
    },
    [dispatch, isCurrentAppMode],
  )

  useEffect(() => {
    globalThis.addEventListener('keydown', handleGlobalKeydown)

    return () => {
      globalThis.removeEventListener('keydown', handleGlobalKeydown)
    }
  }, [handleGlobalKeydown, isCurrentAppMode])

  const handleSearchAction = useCallback((): void => {
    dispatch(setSearchTerm(''))
    dispatch(toggleAppMode(AppMode.search, currentAppMode))
  }, [currentAppMode, dispatch])

  return { handleSearchAction }
}
