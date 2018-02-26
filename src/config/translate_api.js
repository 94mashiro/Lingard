export default (engine, apiKey, language, text) => {
  switch (engine) {
    case 'google':
      return `https://www.googleapis.com/language/translate/v2?key=${apiKey}&target=${language}&q=${encodeURIComponent(text)}`
    default:
      return new Error('could not match engine.')
  }
}