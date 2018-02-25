import { combineReducers } from 'redux'
import translate from './translate'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  translate,
  routing: routerReducer
})

export default rootReducer