// import Translate from '@google-cloud/translate'

export const SET_ORIGINALLANGUAGE = 'SET_ORIGINALLANGUAGE'
export const SET_TRANSLATIONLANGUAGE = 'SET_TRANSLATIONLANGUAGE'
export const SET_ORIGINALTEXT = 'SET_ORIGINALTEXT'
export const SET_TRANSLATIONTEXT = 'SET_TRANSLATIONTEXT'

const projectId = 'vernal-landing-196208'
const apiKey = 'AIzaSyAqjulvjI5eJJ9BCg9M0PZhIFWJ_H_X5NI'

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
    const { original_language, translation_language, original_text, translation_text } = getState().translate
    try {
      const translation = await fetch(`https://www.googleapis.com/language/translate/v2?key=${apiKey}&target=${translation_language}&q=${encodeURIComponent(original_text)}`).then(res => res.json())
      dispatch(setTranslationText(translation.data.translations[0].translatedText))
    } catch (err) {
      console.error(err)
    }
  }
}