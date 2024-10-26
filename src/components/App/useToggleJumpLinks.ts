import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import {
  setDisplayJumpLinks,
  setDisplayJumpLinksMobile,
} from '../../stores/appSettings/appSettingsActions'

type UseToggleJumpLinksResult = {
  showJumpLinks: boolean
  showJumpLinksMobile: boolean
  toggle: (value?: boolean) => void
  toggleMobile: (value?: boolean) => void
}

export function useToggleJumpLinks(): UseToggleJumpLinksResult {
  const dispatch = useAppDispatch()

  const showJumpLinks = useAppSelector(
    (state) => state.appSettings.showJumpLinks,
  )

  const showJumpLinksMobile = useAppSelector(
    (state) => state.appSettings.showJumpLinksMobile,
  )

  const toggle = useCallback(
    (value?: boolean) => {
      dispatch(setDisplayJumpLinks(value ?? !showJumpLinks))
    },
    [dispatch, showJumpLinks],
  )

  const toggleMobile = useCallback(
    (value?: boolean) => {
      dispatch(setDisplayJumpLinksMobile(value ?? !showJumpLinksMobile))
    },
    [dispatch, showJumpLinksMobile],
  )

  return { showJumpLinks, showJumpLinksMobile, toggle, toggleMobile }
}
