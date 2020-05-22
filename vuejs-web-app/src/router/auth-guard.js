import store from '../store';

export default (to, from, next) => {

  if (store.getters.isLoggedIn) {
    return next()
  } else {
    return next(`/signin?redirect=${to.path}`)
  }
}