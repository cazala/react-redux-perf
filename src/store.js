import { createStore } from 'redux'
import reducer from './reducer'

// devtools
let devtools = f => f
if (window) {
  window.Perf = require('react-addons-perf')
  devtools = window.devToolsExtension ? window.devToolsExtension() : devtools
}

export default createStore(reducer, {}, devtools)
