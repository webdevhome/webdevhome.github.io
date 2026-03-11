import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setOpenLinksInNewTab } from '../../stores/appSettings/appSettingsActions'

export type UseOpenLinksInNewTabResult = {
  openLinksInNewTab: boolean
  toggle: () => void
}

export function useOpenLinksInNewTab(): UseOpenLinksInNewTabResult {
  const dispatch = useAppDispatch()

  const openLinksInNewTab = useAppSelector(
    (state) => state.appSettings.openLinksInNewTab,
  )

  const toggle = useCallback(() => {
    dispatch(setOpenLinksInNewTab(!openLinksInNewTab))
  }, [dispatch, openLinksInNewTab])

  return { openLinksInNewTab, toggle }
}
