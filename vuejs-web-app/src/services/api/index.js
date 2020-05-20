import axios from 'axios'
import axiosConfig from '../../config/api'
import authorizationInterceptor from './interceptors'

class Axios {
  constructor () {
    this.axios = axios.create(axiosConfig)
    this.addRequestInterceptor()
  }

  addRequestInterceptor () {
    this.axios.interceptors.request.use(authorizationInterceptor)
  }
}

export default new Axios().axios