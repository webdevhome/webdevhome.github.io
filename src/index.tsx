import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { WebdevHome } from './components/App/App'
import './index.scss'
import { store } from './stores'

ReactDOM.render(
  <Provider store={store}>
    <WebdevHome />
  </Provider>,
  document.getElementById('root')
)
