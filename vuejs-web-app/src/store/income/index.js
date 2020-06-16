import api from '../../services/api'

export default {
  state: {
    incomes: []
  },
  getters: {
    incomes (state) {
      return state.incomes
    }
  },
  mutations: {
    setIncomes (state, incomes) {
      state.incomes = incomes
    },
    setIncome (state, income) {
      state.income = [...state.incomes, income]
    },
    clearIncomes (state) {
      state.incomes = []
    }
  },
  actions: {
    fetchIncomes ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('incomes')
          .then(result => {
            commit('setIncomes', result)
            resolve(result)
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
    }
  }
}