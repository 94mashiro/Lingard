export default (url, config) => {
  return fetch(url, config).then(async res => {
    if (!res.ok) {
      const errorMsg = await res.json()
      throw Error(JSON.stringify(errorMsg))
    } else {
      return res
    }
  })
}