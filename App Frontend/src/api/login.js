import axios from 'axios'
export default async function login (username, password) {
  return axios.post('/login/password', {
    username,
    password
  }, {withCredentials: true})
}
