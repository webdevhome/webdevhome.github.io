import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { WebdevHome } from './components/App/App'
import './index.scss'
import { store } from './stores'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <WebdevHome />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
)
