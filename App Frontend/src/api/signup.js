import axios from 'axios'
export default async function signup ({username, password, firstName, lastName, email}) {
  return axios.post('/login/signup', {
    username,
    password,
    firstName,
    lastName,
    email
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
