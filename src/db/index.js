import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('db')
const db = low(adapter)

const initData = {
  setting: {
    translate_engine: 'google',
    api_key: ''
  },
  translate: {
    original_language: 'en',
    translation_language: 'zh-CN'
  },
  constant: {
    api_key: {
      google: 'AIzaSyAqjulvjI5eJJ9BCg9M0PZhIFWJ_H_X5NI'
    }
  }
}

db.defaults(initData).write()

const get = (key) => {
  return db.get(key).value()
}

const set = (key, value) => {
  if (key.split('.')[0] !== 'constant') {
    db.set(key, value).write()
  }
}

const update = (key, func) => {
  db.update(key, func).write()
}

export default {
  get,
  set,
  update
}