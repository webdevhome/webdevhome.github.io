import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setDisplayBackground } from '../../stores/appSettings/appSettingsActions'

type UseToggleBackgroundResult = {
  showBackground: boolean
  toggle: () => void
}

export function useToggleBackground(): UseToggleBackgroundResult {
  const dispatch = useAppDispatch()

  const showBackground = useAppSelector(
    (state) => state.appSettings.showBackground,
  )

  const toggle = useCallback(() => {
    dispatch(setDisplayBackground(!showBackground))
  }, [dispatch, showBackground])

  return { showBackground, toggle }
}
