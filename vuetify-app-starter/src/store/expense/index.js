import api from '../../services/api'

export default {
  state: {
    expenses: []
  },
  getters: {
    expenses (state) {
      return state.expenses
    },
    expense (state) {
      return expenseId => state.expenses.filter(
        expense => expense.id === expenseId
      )
    }    
  },
  mutations: {
    setExpenses (state, expenses) {
      state.expenses = expenses
    },
    setExpense (state, expense) {
      state.expenses = [...state.expenses, expense]
    },
    updateExpense (state, updatedExpense) {
      state.expenses = state.expenses.map(
        expense => expense.id === updatedExpense.id ? updatedExpense : expense
      )
    },
    deleteExpense (state, expenseId) {
      state.expenses = state.expenses.filter(
        expense => expense.id !== expenseId
      )
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
            commit('setExpenses', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    createExpense ({ commit }, expense) {
      return new Promise((resolve, reject) => {
        api.post('expenses', expense)
          .then(result => {
            commit('setExpense', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    updateExpense ({ commit }, updatedExpense) {
      return new Promise((resolve, reject) => {
        api.put(`expenses/${updatedExpense.id}`, updatedExpense)
          .then(result => {
            commit('updateExpense', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },    
    deleteExpense ({ commit }, expenseId) {
      return new Promise((resolve, reject) => {
        api.delete(`expenses/${expenseId}`)
          .then(result => {
            commit('deleteExpense', expenseId)
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