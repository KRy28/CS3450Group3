<template>
  <div class="login">
    <h1>Dan's Car Barn Login</h1>
    <form onsubmit="return false">
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="username" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" name="password" required>
      </div>
      <button @click="login">Login</button>
    </form>
    <hr>
    <div>OR</div>
    <button @click="goToSignup">Sign up</button>
  </div>
</template>

<script>
import loginAPI from '../api/login'
import router from '../router'
export default {
  name: 'LoginView',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      return loginAPI({username: this.username, password: this.password})
      .catch(err => {
        console.log('error', err)
      })
    },
    
    goToSignup () {
      router.push('/signup')
    }
  },    
}
</script>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
input,
input[type="password"] {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 20rem;
  font-size: 1rem;
  color: #555;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input:focus {
  outline: none;
  border-color: #007bff; /* change border color on focus */
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* add box shadow on focus */
}
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
button:hover {
  background-color: #0069d9; /* darken background color on hover */
}
.form-group input {
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: #f5f8fa; /* light blue background color */
  transition: background-color 0.2s;
}
.form-group input:focus {
  outline: none;
  background-color: #fff; /* change background color on focus */
}
</style>
