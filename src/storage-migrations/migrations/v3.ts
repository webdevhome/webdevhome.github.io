import { isStringArray } from '../../utils/isStringArray.ts'
import { allLinks } from '../../links/links.ts'

export function migrateToV3() {
  const storageValue = localStorage.getItem('wdh:hidden-items')
  if (storageValue === null) return

  const hiddenUrls = (() => {
    try {
      return JSON.parse(storageValue)
    } catch {
      return null
    }
  })()
  if (hiddenUrls === null) return
  if (!isStringArray(hiddenUrls)) return

  const hiddenIds = allLinks
    .values()
    .filter((link) => hiddenUrls.includes(link.url))
    .map((link) => link.id)
    .toArray()

  console.log(JSON.stringify(hiddenIds), JSON.stringify(hiddenUrls))

  localStorage.setItem('wdh:hidden-items', JSON.stringify(hiddenIds))
}
