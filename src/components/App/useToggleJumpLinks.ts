import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import {
  setDisplayJumpLinks,
  setDisplayJumpLinksMobile,
} from '../../stores/appSettings/appSettingsActions'

type UseToggleJumpLinksResult = {
  showJumpLinks: boolean
  showJumpLinksMobile: boolean
  toggle: () => void
  toggleMobile: () => void
}

export function useToggleJumpLinks(): UseToggleJumpLinksResult {
  const dispatch = useAppDispatch()

  const showJumpLinks = useAppSelector(
    (state) => state.appSettings.showJumpLinks,
  )

  const showJumpLinksMobile = useAppSelector(
    (state) => state.appSettings.showJumpLinksMobile,
  )

  const toggle = useCallback(() => {
    dispatch(setDisplayJumpLinks(!showJumpLinks))
  }, [dispatch, showJumpLinks])

  const toggleMobile = useCallback(() => {
    dispatch(setDisplayJumpLinksMobile(!showJumpLinksMobile))
  }, [dispatch, showJumpLinksMobile])

  return { showJumpLinks, showJumpLinksMobile, toggle, toggleMobile }
}
