import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setDisplayJumpLinks } from '../../stores/appSettings/appSettingsActions'

type UseToggleJumpLinksResult = {
  showJumpLinks: boolean
  toggle: () => void
}

export function useToggleJumpLinks(): UseToggleJumpLinksResult {
  const dispatch = useAppDispatch()

  const showJumpLinks = useAppSelector(
    (state) => state.appSettings.showJumpLinks,
  )

  const toggle = useCallback(() => {
    dispatch(setDisplayJumpLinks(!showJumpLinks))
  }, [dispatch, showJumpLinks])

  return { showJumpLinks, toggle }
}
