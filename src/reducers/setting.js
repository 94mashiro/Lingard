import { SET_TRANSLATEENGINE, SET_ENGINEAPIKEY } from '../actions/setting'

const initialState = {
  translate_engine: 'google',
  api_key: 'AIzaSyAqjulvjI5eJJ9BCg9M0PZhIFWJ_H_X5NI'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSLATEENGINE:
      return { ...state, translate_engine: action.payload.engine }
    case SET_ENGINEAPIKEY:
      return { ...state, api_key: action.payload.key }
    default:
      return state
  }
}