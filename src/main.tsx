import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App.tsx'
import { registerGlobalEvents } from './app/globalEvents.ts'
import './index.css'
import { migrateLocalStorage } from './storage-migrations/migrateLocalStorage.ts'

const container = document.getElementById('root')

if (container !== null) {
  migrateLocalStorage()
  registerGlobalEvents()

  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
