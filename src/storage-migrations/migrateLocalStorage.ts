import { migrateToV1 } from './migrations/v1.ts'
import { migrateToV2 } from './migrations/v2.ts'
import { migrateToV3 } from './migrations/v3.ts'

export const storageVersionKey = 'wdh:storage-version'

const migrations = [migrateToV1, migrateToV2, migrateToV3]

export function migrateLocalStorage() {
  const currentStorageVersionNumber = readStorageVersion()

  for (const migrationVersionString in migrations) {
    const migrationVersionNumber = Number.parseInt(migrationVersionString)
    if (currentStorageVersionNumber > migrationVersionNumber) continue

    migrations[migrationVersionNumber]()
    localStorage.setItem(storageVersionKey, `v${migrationVersionNumber + 1}`)
  }
}

function readStorageVersion(): number {
  const storageValue = localStorage.getItem(storageVersionKey) ?? 'v0'
  const match = /^v(\d+)$/.exec(storageValue)?.[1] ?? '0'
  return Number.parseInt(match)
}
