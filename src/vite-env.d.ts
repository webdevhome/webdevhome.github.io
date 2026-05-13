interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_USE_DYNAMIC_CONFIG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
