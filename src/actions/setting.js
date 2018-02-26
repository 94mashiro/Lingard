export const SET_TRANSLATEENGINE = '@@SETTING/SET_TRANSLATEENGINE'
export const SET_ENGINEAPIKEY = '@@SETTING/SET_ENGINEAPIKEY'

export const setTranslateEngine = (engine) => {
  return {
    type: SET_TRANSLATEENGINE,
    payload: {
      engine
    }
  }
}

export const setEngineAPIKey = (key) => {
  return {
    type: SET_ENGINEAPIKEY,
    payload: {
      key
    }
  }  
}