/* eslint-disable no-var */

import { StoreEnhancer } from 'redux'

export {}

declare global {
  var __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer
}
