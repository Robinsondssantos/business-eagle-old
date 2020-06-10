import api from '../../services/api'

export default {
  state: {
    providers: []
  },
  getters: {
    providers (state) {
      return state.providers
    }
  },
  mutations: {
    setProviders (state, providers) {
      state.providers = providers
    },
    setProvider (state, provider) {
      state.providers = [...state.providers, provider]
    },
    clearProviders (state) {
      state.providers = []
    }
  },
  actions: {
    fetchProviders ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('providers')
          .then(result => {
            commit('setProviders', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    createProvider ({ commit }, provider) {
      return new Promise((resolve, reject) => {
        api.post('providers', provider)
          .then(result => {
            commit('setProvider', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    }
  }
}