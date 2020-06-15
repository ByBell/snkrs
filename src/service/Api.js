import axios from 'axios'

class RestApi {
  /**
   * @param {string} url
   * @param {string} token
   */
  constructor(url, token = '') {
    this.url = url
    this.httpClient = axios.create({
      baseURL: url,
    })
  }

  /**
   * @param {string} uri
   * @param {Object} data
   *
   * @return (Function)
   */
  get(uri, data) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(uri)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
   * @param {string} uri
   *
   * @return (Function)
   */
  delete(uri) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(uri)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
   * @param {string} uri
   * @param {Object} data
   *
   * @return (Function)
   */
  post(uri, data) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(uri, data)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  /**
   * @param {string} uri
   * @param {Object} data
   *
   * @return (Function)
   */
  put(uri, data) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .put(uri, data)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  /**
   * @param {string} uri
   * @param {Object} data
   *
   * @return (Function)
   */
  patch(uri, data) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .patch(uri, data)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }
}

const GATEWAY_API_URL = "àdéfinir"

export {RestApi, GATEWAY_API_URL}
