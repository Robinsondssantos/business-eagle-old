import api from '../../services/api'

export default {
  state: {
    incomeTypes: []
  },
  getters: {
    incomeTypes (state) {
      return state.incomeTypes
    },
    incomeType (state) {
      return incomeTypeId => state.incomeTypes.filter(
        incomeType => incomeType.id === incomeTypeId
      )
    }
  },
  mutations: {
    setIncomeTypes (state, incomeTypes) {
      state.incomeTypes = incomeTypes
    },
    setIncomeType (state, incomeType) {
      state.incomeTypes = [...state.incomeTypes, incomeType]
    },
    updateIncomeType (state, updatedIncomeType) {
      state.incomeTypes = state.incomeTypes.map(
        incomeType => incomeType.id === updatedIncomeType.id
          ? updatedIncomeType : incomeType
      )
    },
    deleteIncomeType (state, incomeTypeId) {
      state.incomeTypes = state.incomeTypes.filter(
        incomeType => incomeType.id !== incomeTypeId
      )
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
    },
    updateIncomeType ({ commit }, updatedIncomeType) {
      return new Promise((resolve, reject) => {
        api.put(`income_types/${updatedIncomeType.id}`, updatedIncomeType)
          .then(result => {
            commit('updateIncomeType', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    deleteIncomeType ({ commit }, incomeTypeId) {
      return new Promise((resolve, reject) => {
        api.delete(`income_types/${incomeTypeId}`)
          .then(result => {
            commit('deleteIncomeType', incomeTypeId)
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

