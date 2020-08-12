import api from '../../services/api'

export default {
  state: {
    incomes: []
  },
  getters: {
    incomes (state) {
      return state.incomes
    },
    income (state) {
      return incomeId => state.incomes.filter(
        income => income.id === incomeId
      )
    }    
  },
  mutations: {
    setIncomes (state, incomes) {
      state.incomes = incomes
    },
    setIncome (state, income) {
      state.incomes = [...state.incomes, income]
    },
    updateIncome (state, updatedIncome) {
      state.incomes = state.incomes.map(
        income => income.id === updatedIncome.id ? updatedIncome : income
      )
    },
    deleteIncome (state, incomeId) {
      state.incomes = state.incomes.filter(
        income => income.id !== incomeId
      )
    },    
    clearIncomes (state) {
      state.incomes = []
    }
  },
  actions: {
    fetchIncomes ({ commit }) {
      console.log('aloooo')
      return new Promise((resolve, reject) => {
        api.get('incomes')
          .then(result => {
            commit('setIncomes', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    createIncome ({ commit }, income) {
      return new Promise((resolve, reject) => {
        api.post('incomes', income)
          .then(result => {
            commit('setIncome', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    updateIncome ({ commit }, updatedIncome) {
      return new Promise((resolve, reject) => {
        api.put(`incomes/${updatedIncome.id}`, updatedIncome)
          .then(result => {
            commit('updateIncome', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },      
    deleteIncome ({ commit }, incomeId) {
      return new Promise((resolve, reject) => {
        api.delete(`incomes/${incomeId}`)
          .then(result => {
            commit('deleteIncome', incomeId)
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