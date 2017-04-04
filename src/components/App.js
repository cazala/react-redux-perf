import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import List from '../containers/List'
import store from '../store'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <List/>
      </Provider>
    )
  }
}
