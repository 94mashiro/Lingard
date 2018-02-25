import { SET_ORIGINALLANGUAGE, SET_TRANSLATIONLANGUAGE, SET_ORIGINALTEXT, SET_TRANSLATIONTEXT } from '../actions/translate'

const initialState = {
  original_language: 'en',
  translation_language: 'zh-cn',
  original_text: 'hello google translate',
  translation_text: ''
}


export default function translate (state = initialState, action) {
  switch (action.type) {
    case SET_ORIGINALLANGUAGE:
      return { ...state, original_language: action.payload.language }
    case SET_TRANSLATIONLANGUAGE:
      return { ...state, translation_language: action.payload.language }
    case SET_ORIGINALTEXT:
      return { ...state, original_text: action.payload.text }
    case SET_TRANSLATIONTEXT:
      return { ...state, translation_text: action.payload.text }
    default: 
      return state
  }
}