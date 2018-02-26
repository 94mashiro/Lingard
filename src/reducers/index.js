import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import translate from './translate'
import setting from './setting'

const rootReducer = combineReducers({
  translate,
  setting,
  routing: routerReducer
})

export default rootReducer