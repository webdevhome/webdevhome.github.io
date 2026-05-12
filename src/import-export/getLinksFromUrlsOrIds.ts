import { type LinkItem, allLinks } from '../links/links.ts'
import { urlRegex } from './applyImport.ts'

/**
 * Gets all links that can be matched with the given `Set` of URLs or IDs.
 */
export function getLinksFromUrlsOrIds(
  importedSet: Set<string>,
): Iterable<LinkItem> {
  return allLinks.values().filter((link) => {
    /**
     * To check the data format get a random item and see if it's a URL or not.
     * Currently either all items are a URL or all items are an ID.
     */
    const randomItem = importedSet.values().next().value
    if (randomItem === undefined) {
      throw new Error('Error while checking what type of data was given.')
    }

    // If random item is a URL (exported data from app version < 4)
    if (urlRegex.exec(randomItem) !== null) {
      return importedSet.has(link.url)
    }

    // Otherwise random item is assumed to be an ID (app version >= 4)
    return importedSet.has(link.id)
  })
}
