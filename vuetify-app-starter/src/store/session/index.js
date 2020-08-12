import api from '../../services/api'

export default {
  state: {
    session: {
      token: localStorage.getItem('token') || '',
      user: {
        id: localStorage.getItem('id') || '',
        first_name: localStorage.getItem('first_name') || ''
      }
    }
  },
  getters: {
    session (state) {
      return state.session
    },
    isLoggedIn (state) {
      return !!state.session.token
    }
  },
  mutations: {
    setSession (state, session) {
      state.session = session
    },
    clearSession (state) {
      state.session.token = ''
      state.session.user.id = ''
      state.session.user.first_name = ''
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    session ({ commit }, credential) {
      return new Promise((resolve, reject) => {
        api.post('sessions', {
          email: credential.email,
          password: credential.password
        })
          .then(result => {
            localStorage.setItem('email', result.data.user.email)
            localStorage.setItem('id', result.data.user.id)
            localStorage.setItem('token', result.data.token)
            commit('setSession', result.data)
            resolve(result.data)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    },
    // eslint-disable-next-line no-unused-vars
    logOff ({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        localStorage.clear()
        commit('clearSession')
        resolve()
      })
    }
  }
}