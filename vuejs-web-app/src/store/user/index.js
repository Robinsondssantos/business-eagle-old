import api from '../../services/api'

export default {
  actions: {
    // eslint-disable-next-line no-unused-vars
    createUser ({ commit }, user) {

      const newUser = {
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        password: user.password
      }

      return new Promise((resolve, reject) => {
        api.post('users', newUser)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {})
      })
    }
  }
}