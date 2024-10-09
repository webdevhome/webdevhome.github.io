import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setDisplayDescription } from '../../stores/appSettings/appSettingsActions'

interface UseToggleDescriptionsResult {
  showDescriptions: boolean
  toggle: () => void
}

export function useToggleDescriptions(): UseToggleDescriptionsResult {
  const dispatch = useAppDispatch()

  const showDescriptions = useAppSelector(
    (state) => state.appSettings.showDescriptions,
  )

  const toggle = useCallback(() => {
    dispatch(setDisplayDescription(!showDescriptions))
  }, [dispatch, showDescriptions])

  return { showDescriptions, toggle }
}
