const engines = require('./engine')
export default (engine, language, text) => {
  switch (engine) {
    case 'google':
      return `http://localhost:5000/google?q=${text}&target=${language}`
    case 'baidu':
      return `http://localhost:5000/baidu?q=${text}&to=${language}`
    default:
      return new Error('could not match engine.')
  }
}