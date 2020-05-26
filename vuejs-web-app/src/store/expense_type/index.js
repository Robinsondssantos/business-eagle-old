import api from '../../services/api'

export default {
  state: {
    expenseTypes: []
  },
  getters: {
    expenseTypes (state) {
      return state.expenseTypes
    }
  },
  mutations: {
    setExpenseTypes (state, expenseTypes) {
      state.expenseTypes = expenseTypes
    },
    setExpenseType (state, expenseType) {
      state.expenseTypes = [...state.expenseTypes, expenseType]
    },
    clearExpenseTypes (state) {
      state.expenseTypes = []
    }
  },
  actions: {
    fetchExpenseTypes ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('expense_types')
          .then(result => {
            commit('setExpenseTypes', result.data)
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