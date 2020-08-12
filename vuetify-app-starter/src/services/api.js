import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.yourdomain.com'
})

export default api
