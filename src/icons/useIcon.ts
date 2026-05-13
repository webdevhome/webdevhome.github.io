import { useStore } from '@nanostores/react'
import { useEffect } from 'react'
import {
  iconCacheStore,
  type IconData,
  type SimpleIconsIconData,
} from './iconCacheStore.ts'

async function fetchSIIcon(iconIdentifier: string) {
  const iconString = `si:${iconIdentifier}`
  if (iconCacheStore.hasIcon(iconString)) return

  iconCacheStore.registerIcon(iconString)

  const url = `/simple-icons/${iconIdentifier}.json`
  const response = await fetch(url)
  if (!response.ok) return

  const json: Omit<SimpleIconsIconData, 'type'> = await response.json()

  iconCacheStore.addIcon(iconString, { type: 'si', ...json })
}

async function registerFileIcon(iconIdentifier: string) {
  iconCacheStore.addIcon(`file:${iconIdentifier}`, {
    type: 'file',
    filepath: iconIdentifier,
  })
}

export function useIcon(iconString: string | undefined): IconData | null {
  const iconCache = useStore(iconCacheStore.$iconCache)

  const iconStringParts = iconString?.split(':') ?? null
  const iconType = iconStringParts?.[0] ?? null
  const iconIdentifier = iconStringParts?.[1] ?? null

  useEffect(() => {
    if (iconString === undefined) return
    if (iconType === null) return
    if (iconIdentifier === null) return

    if (iconType === 'si') {
      fetchSIIcon(iconIdentifier)
    } else if (iconType === 'file') {
      registerFileIcon(iconIdentifier)
    }
  }, [iconIdentifier, iconString, iconType])

  return iconString === undefined ? null : iconCache[iconString]
}
