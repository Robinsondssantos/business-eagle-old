import api from '../../services/api'

export default {
  state: {
    customers: []
  },
  getters: {
    customers (state) {
      return state.customers
    }
  },
  mutations: {
    setCustomers (state, customers) {
      state.customers = customers
    },
    setCustomer (state, customer) {
      state.customers = [...state.customers, customer]
    },
    clearCustomers (state) {
      state.customers = []
    }
  },
  actions: {
    fetchCustomers ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('customers')
          .then(result => {
            commit('setCustomers', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    createCustomer ({ commit }, customer) {
      return new Promise((resolve, reject) => {
        api.post('customers', customer)
          .then(result => {
            commit('setCustomer', result.data)
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