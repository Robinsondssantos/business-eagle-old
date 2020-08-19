import Vue from 'vue'
import Vuex from 'vuex'
import customer from './customer'
import provider from './provider'
import expenseType from './expense_type'
import incomeType from './income_type'
import expense from './expense'
import income from './income'
import session from './session'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customer,
    provider,
    expenseType,
    incomeType,
    expense,
    income,
    session,
    user
  }
})
