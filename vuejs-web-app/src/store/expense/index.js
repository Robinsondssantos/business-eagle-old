import api from '../../services/api'

export default {
  state: {
    expenses: []
  },
  getters: {
    expenses (state) {
      return state.expenses
    }
  },
  mutations: {
    setExpenses (state, expenses) {
      state.expenses = expenses
    },
    setExpense (state, expense) {
      state.expenses = [...state.expenses, expense]
    },
    clearExpenses (state) {
      state.expenses = []
    }
  },
  actions: {
    fetchExpenses ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('expenses')
          .then(result => {
            commit('setExpenses', result)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    }
  }
}