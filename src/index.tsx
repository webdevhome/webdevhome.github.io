import { StrictMode } from 'react'
// @ts-expect-error wait for React 18 types to be fixed
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210/files#r846261799
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { WebdevHome } from './components/App/App'
import { store } from './stores'

const container = document.getElementById('root')

if (container !== null) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <Provider store={store}>
        <WebdevHome />
      </Provider>
    </StrictMode>,
  )
}
