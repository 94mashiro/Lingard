import String from 'string'
import getTranslateApi from '../config/translate_api'

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
    const { translation_language, original_text } = translate
    const { translate_engine, api_key } = setting
    try {
      const translation = await fetch(getTranslateApi(translate_engine, api_key, translation_language, original_text)).then(res => res.json())
      dispatch(setTranslationText(String(translation.data.translations[0].translatedText).decodeHTMLEntities()))
    } catch (err) {
      console.error(err)
    }
  }
}