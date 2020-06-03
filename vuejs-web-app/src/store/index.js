import Vue from 'vue'
import Vuex from 'vuex'
import expenseType from './expense_type'
import incomeType from './income_type'
import expense from './expense'
import income from './income'
import session from './session'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expenseType,
    incomeType,
    expense,
    income,
    session,
    user
  }
})
