import api from '../../services/api'

export default {
  state: {
    expenseTypes: []
  },
  getters: {
    expenseTypes (state) {
      return state.expenseTypes
    },
    expenseType (state) {
      return expenseTypeId => state.expenseTypes.filter(
        expenseType => expenseType.id === expenseTypeId
      )
    }     
  },
  mutations: {
    setExpenseTypes (state, expenseTypes) {
      state.expenseTypes = expenseTypes
    },
    setExpenseType (state, expenseType) {
      state.expenseTypes = [...state.expenseTypes, expenseType]
    },
    updateExpenseType (state, updatedExpenseType) {
      state.expenseTypes = state.expenseTypes.map(
        expenseType => expenseType.id === updatedExpenseType.id 
          ? updatedExpenseType : expenseType
      )
    },
    deleteExpenseType (state, expenseTypeId) {
      state.expenseTypes = state.expenseTypes.filter(
        expenseType => expenseType.id !== expenseTypeId
      )
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
    },
    createExpenseType ({ commit }, expenseType) {
      return new Promise((resolve, reject) => {
        api.post('expense_types', expenseType)
          .then(result => {
            commit('setExpenseType', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    updateExpenseType ({ commit }, updatedExpenseType) {
      return new Promise((resolve, reject) => {
        api.put(`expense_types/${updatedExpenseType.id}`, updatedExpenseType)
          .then(result => {
            commit('updateExpenseType', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },       
    deleteExpenseType ({ commit }, expenseTypeId) {
      return new Promise((resolve, reject) => {
        api.delete(`expense_types/${expenseTypeId}`)
          .then(result => {
            commit('deleteExpenseType', expenseTypeId)
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