import { useEnumStorageSetting } from '@/lib/localStorage/useEnumStorageSetting'
import { localStorageKey } from '../localStorage/localStorageKeys'
import { useBoolStorageSetting } from '../localStorage/useBoolStorageSetting'
import { useListStorageSetting } from '../localStorage/useListStorageSetting'

localStorage.removeItem('wdh:storage-version')

export const hiddenItemsSetting = useListStorageSetting({
  name: localStorageKey.hiddenItems,
  migrate() {
    const v0Key = 'wdh:hidden-tiems'
    const value = localStorage.getItem(v0Key)
    localStorage.removeItem(v0Key)
    return value
  },
})

export const themeSetting = useEnumStorageSetting({
  name: localStorageKey.theme,
  values: ['light', 'dark', 'auto'],
  defaultValue: 'auto',
  migrate() {
    const sdhKey = 'sdh:theme-setting'
    const v0Key = 'wdh:theme-setting'
    const value = localStorage.getItem(v0Key) ?? localStorage.getItem(sdhKey)
    localStorage.removeItem(sdhKey)
    localStorage.removeItem(v0Key)
    return value
  },
})

export const showBackgroundSetting = useBoolStorageSetting({
  name: localStorageKey.showBackground,
  defaultValue: false,
  migrate() {
    const v0Key = 'wdh:show-background-setting'
    const value = localStorage.getItem(v0Key)
    localStorage.removeItem(v0Key)
    return value
  },
})

export const showDescriptionsSetting = useBoolStorageSetting({
  name: localStorageKey.showDescriptions,
  defaultValue: false,
  migrate() {
    const v0Key = 'wdh:show-descriptions-setting'
    const value = localStorage.getItem(v0Key)
    localStorage.removeItem(v0Key)
    return value
  },
})

export const showJumpLinksSetting = useBoolStorageSetting({
  name: localStorageKey.showJumpLinks,
  defaultValue: false,
  migrate() {
    const v0Key = 'wdh:show-jump-links-setting'
    const value = localStorage.getItem(v0Key)
    localStorage.removeItem(v0Key)
    return value
  },
})
