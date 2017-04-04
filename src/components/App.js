import React, { Component } from 'react'
import { Provider } from 'react-redux'
import List from '../containers/List'
import store from '../store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List/>
      </Provider>
    )
  }
}
