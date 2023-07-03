import https from 'https'
export const getDataFromUrl = async (url) => {
  try {
    const token = 'aSuperSecretKey'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const promise = new Promise((resolve, reject) => {
      let data = ''
      https.get(url, options, (res) => {
        res.on('data', (chunk) => {
          data += chunk
        })
        res.on('end', () => {
          resolve(data)
        })
      })
    })

    const result = await promise

    return result
  } catch (error) {
    return { error }
  }
}
