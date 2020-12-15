import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'

import './api/server'

import store from './store'

// console.log('Dispatching action')
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// console.log('Dispatch complete')
// console.log('State after dispatch: ', store.getState())

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
