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
    session ({ commit }, credential) {
      return new Promise((resolve, reject) => {
        api.post('session', {
          email: credential.email,
          password: credential.password
        })
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {})
      })
    },
    logOff ({ commit }) {
      return new Promise((resolve, reject) => {
        localStorage.clear()
      })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
      .finally(() => {})
    }
  }
}