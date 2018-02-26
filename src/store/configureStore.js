import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import * as translateActions from '../actions/translate'

const middleware = []
const enhancers = []

const history = createBrowserHistory()

function configureStore(initialState = {}) {
  const router = routerMiddleware(history)

  const logger = createLogger({
    level: 'info',
    collapsed: true
  })

  middleware.push(thunk)
  middleware.push(router)

  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger)
  }

  const actionCreators = {
    ...translateActions
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionCreators
  }) : compose

  enhancers.push(applyMiddleware(...middleware))

  const enhancer = composeEnhancers(...enhancers)

  const store = createStore(rootReducer, initialState, enhancer)

  return store
}

export { configureStore, history }