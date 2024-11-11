export type LocalStorageKeyString = `wdh:${string}:v${number}`

function key<NAME extends string, VERSION extends number>(
  name: NAME,
  version: VERSION,
): `wdh:${NAME}:v${VERSION}` {
  return `wdh:${name}:v${version}`
}

export const localStorageKey = {
  hiddenItems: key('hidden-items', 1),
  showBackground: key('show-background', 1),
  showDescriptions: key('show-descriptions', 1),
  showJumpLinks: key('show-jump-links', 1),
  theme: key('theme', 1),
}
