import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { WebdevHome } from './components/App/App'
import { store } from './stores'

const container = document.getElementById('root')

if (container !== null) {
  createRoot(container).render(
    <StrictMode>
      <Provider store={store}>
        <WebdevHome />
      </Provider>
    </StrictMode>,
  )
}
