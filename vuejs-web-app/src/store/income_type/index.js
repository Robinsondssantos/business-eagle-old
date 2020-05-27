import api from '../../services/api'

export default {
  state: {
    incomeTypes: []
  },
  getters: {
    incomeTypes (state) {
      return state.incomeTypes
    }
  },
  mutations: {
    setIncomeTypes (state, incomeTypes) {
      state.incomeTypes = incomeTypes
    },
    setIncomeType (state, incomeType) {
      state.incomeTypes = [...state.incomeTypes, incomeType]
    },
    clearIncomeTypes (state) {
      state.incomeTypes = []
    }
  },
  actions: {
    fetchIncomeTypes ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('income_types')
          .then(result => {
            commit('setIncomeTypes', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    createIncomeType ({ commit }, incomeType) {
      return new Promise((resolve, reject) => {
        api.post('income_types', incomeType)
          .then(result => {
            commit('setIncomeType', result.data)
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