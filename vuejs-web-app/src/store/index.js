import Vue from 'vue'
import Vuex from 'vuex'
import session from './session'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    session,
    user
  }
})
