import { migrateToV1 } from './migrations/v1.ts'
import { migrateToV2 } from './migrations/v2.ts'

export const storageVersionKey = 'wdh:storage-version'

export function migrateLocalStorage() {
  const storageVersionString = localStorage.getItem(storageVersionKey) ?? 'v0'
  const storageVersionStringMatch = /^v(\d+)$/.exec(storageVersionString)
  const storageVersion =
    storageVersionStringMatch === null
      ? 0
      : Number.parseInt(storageVersionStringMatch[1])

  const migrations = [migrateToV1, migrateToV2]

  for (const migrationVersionString in migrations) {
    const migrationVersion = Number.parseInt(migrationVersionString)
    if (storageVersion > migrationVersion) continue

    migrations[migrationVersion]()
  }
}
