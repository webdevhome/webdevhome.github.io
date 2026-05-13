import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import * as icons from 'simple-icons'

const iconsFolder = resolve('./public/simple-icons')

if (existsSync(iconsFolder)) {
  rmSync(iconsFolder, { recursive: true })
}

mkdirSync(iconsFolder)

for (const icon of Object.values(icons)) {
  const { path, hex } = icon
  const data = { path, hex }
  const filePath = resolve(iconsFolder, `${icon.slug}.json`)

  writeFileSync(filePath, JSON.stringify(data), { encoding: 'utf-8' })
}
