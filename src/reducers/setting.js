import { SET_TRANSLATEENGINE, SET_ENGINEAPIKEY } from '../actions/setting'
import db from '../db'

const initialState = {
  translate_engine: db.get('setting.translate_engine'),
  api_key: db.get('setting.api_key')
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSLATEENGINE:
      db.set('setting.translate_engine', action.payload.engine)
      return { ...state, translate_engine: action.payload.engine }
    case SET_ENGINEAPIKEY:
      db.set('setting.api_key',action.payload.key)
      return { ...state, api_key: action.payload.key }
    default:
      return state
  }
}