import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

import {Provider} from 'react-redux'

// в реальной ситуации ключ сохранялся бы при логине
localStorage.setItem('api_key', 'cb3f6334-e12c-4515-99d3-833d40a4d4fd')

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

if (module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}

import {fetchCurrencies} from './actions'
store.dispatch(fetchCurrencies())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
