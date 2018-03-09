import getTranslateApi from '../config/translate_api'
import fetch from '../utils/fetch'
import { message } from 'antd'

export const SET_ORIGINALLANGUAGE = '@@TRANSLATE/SET_ORIGINALLANGUAGE'
export const SET_TRANSLATIONLANGUAGE = '@@TRANSLATE/SET_TRANSLATIONLANGUAGE'
export const SET_ORIGINALTEXT = '@@TRANSLATE/SET_ORIGINALTEXT'
export const SET_TRANSLATIONTEXT = '@@TRANSLATE/SET_TRANSLATIONTEXT'

export const setOriginalText = (text) => {
  return {
    type: SET_ORIGINALTEXT,
    payload: {
      text
    }
  }
}

export const setTranslationText = (text) => {
  return {
    type: SET_TRANSLATIONTEXT,
    payload: {
      text
    }
  }
}

export const setOriginalLanguage = (language) => {
  return {
    type: SET_TRANSLATIONLANGUAGE,
    payload: {
      language
    }
  }
}

export const setTranslationLanguage = (language) => {
  return {
    type: SET_TRANSLATIONLANGUAGE,
    payload: {
      language
    }
  }
}

export const fetchTranslationApi = () => {
  return async (dispatch, getState) => {
    const { translate, setting } = getState()
    let { translation_language, original_text } = translate
    const { translate_engine, api_key } = setting
    if (!original_text) return
    try {
      original_text = original_text.split('#').join('')
      const translation = await fetch(getTranslateApi(translate_engine, translation_language, original_text)).then(res => res.json())
      let translationText = ''
      switch (translate_engine) {
        case 'google':
          translationText = translation.data.translations[0].translatedText
          break
        case 'baidu':
          translationText = translation.trans_result[0].dst
          break
        default:
          break
      }
      dispatch(setTranslationText(translationText))
    } catch (err) {
      console.log(err)
      switch (translate_engine) {
        case 'google':
          message.error(JSON.parse(err.message).error.message)
          break
        case 'baidu':
          message.error(JSON.parse(err.message).error_msg)
          break
        default:
          console.error(err)
          break
      }
    }
  }
}