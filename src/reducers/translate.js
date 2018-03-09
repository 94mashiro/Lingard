import { SET_ORIGINALLANGUAGE, SET_TRANSLATIONLANGUAGE, SET_ORIGINALTEXT, SET_TRANSLATIONTEXT } from '../actions/translate'
import db from '../db'

const initialState = {
  original_language: db.get('translate.original_language'),
  translation_language: db.get('translate.translation_language'),
  original_text: '',
  translation_text: ''
}


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORIGINALLANGUAGE:
      db.set('translate.original_language', action.payload.language)
      return { ...state, original_language: action.payload.language }
    case SET_TRANSLATIONLANGUAGE:
      db.set('translate.translation_language', action.payload.language)
      return { ...state, translation_language: action.payload.language }
    case SET_ORIGINALTEXT:
      return { ...state, original_text: action.payload.text }
    case SET_TRANSLATIONTEXT:
      return { ...state, translation_text: action.payload.text }
    default: 
      return state
  }
}