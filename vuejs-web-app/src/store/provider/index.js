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
    updateProvider (state, updatedProvider) {
      state.providers = state.providers.map(
        provider => provider.id === updatedProvider.id ? updatedProvider : provider
      )
    },
    deleteProvider (state, providerId) {
      state.providers = state.providers.filter(
        provider => provider.id !== providerId
      )
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
    },
    updateProvider ({ commit }, updatedProvider) {
      return new Promise((resolve, reject) => {
        api.put(`providers/${updatedProvider.id}`, updatedProvider)
          .then(result => {
            commit('updateProvider', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    deleteProvider ({ commit }, providerId) {
      return new Promise((resolve, reject) => {
        api.delete(`providers/${providerId}`)
          .then(result => {
            commit('deleteProvider', providerId)
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