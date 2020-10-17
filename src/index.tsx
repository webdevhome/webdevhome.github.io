import React from 'react'
import ReactDOM from 'react-dom'
import { WebdevHome } from './App'
import { Contexts } from './Contexts'
import './index.scss'

ReactDOM.render(
  <Contexts>
    <WebdevHome />
  </Contexts>,
  document.getElementById('root')
)
