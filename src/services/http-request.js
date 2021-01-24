import axios from 'axios'

const errorHandler = (status, message) => {
  switch (status) {
    case 400:
      console.log(status, message)
      break
    case 401:
      console.log(status, message)
      break
    case 403:
      console.log(status, message)
      break
    case 404:
      console.log(status, message)
      break
    default:
      console.log(status, message)
  }
}

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(async (config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

api.interceptors.response.use(async (response) => {
  console.log(response)
  return response
}, (error) => {
  if (error) {
    console.log(error)
    errorHandler(error.response.status, error.response.data)
    return Promise.reject(error.response.data)
  } else {
    if (!window.navigator.onLine) {
      console.log('Internet has been offLine, please check')
    } else {
      return Promise.reject(error.response.data)
    }
  }
})

export default api
