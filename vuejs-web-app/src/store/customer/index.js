import api from '../../services/api'

export default {
  state: {
    customers: []
  },
  getters: {
    customers (state) {
      return state.customers
    },
    customer (state) {
      return customerId => state.customers.filter(
        customer => customer.id === customerId
      )
    }    
  },
  mutations: {
    setCustomers (state, customers) {
      state.customers = customers
    },
    setCustomer (state, customer) {
      state.customers = [...state.customers, customer]
    },
    updateCustomer (state, updatedCustomer) {
      state.customers = state.customers.map(
        customer => customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    },
    deleteCustomer (state, customerId) {
      state.customers = state.customers.filter(
        customer => customer.id !== customerId
      )
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
    },
    updateCustomer ({ commit }, updatedCustomer) {
      return new Promise((resolve, reject) => {
        api.put(`customers/${updatedCustomer.id}`, updatedCustomer)
          .then(result => {
            commit('updateCustomer', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },    
    deleteCustomer ({ commit }, customerId) {
      return new Promise((resolve, reject) => {
        api.delete(`customers/${customerId}`)
          .then(result => {
            commit('deleteCustomer', customerId)
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