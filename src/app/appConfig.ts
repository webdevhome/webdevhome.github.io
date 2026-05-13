import type { AppConfig } from '../links/links.ts'

async function getAppConfig(): Promise<AppConfig> {
  if (import.meta.env.VITE_USE_DYNAMIC_CONFIG === 'true') {
    return (await (await fetch('/config.json')).json()) as AppConfig
  }

  return (await import('../../config.json')) as AppConfig
}

export const appConfig = await getAppConfig()
