import axios from 'axios'
import store from '../store'
import router from '../router'
export default async function login ({username, password}) {
  return axios.post('/login/password', {
    username,
    password
  }, {withCredentials: true})
  .then(user => {
    store.dispatch('setUser', user.data)
    if (user.data.elevation >= 3) {
      router.push('/manager')
    } else if (user.data.elevation === 2) {
      router.push('/employee')
    } else {
      router.push('/user')
    }
  })
  .catch(err => {
    console.log('error', err)
  })
}
