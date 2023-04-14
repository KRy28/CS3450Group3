<script>
import router from '../../../App Frontend/src/router/index.js';
import TheNavigationBar from '../components/TheNavigationBar.vue';
  export default {
  data() {
  	return {
      json: undefined, // initialize the 'json' property to undefined
      login: {
        username: null,
        password: null,
      }
    }
	},

  methods: {
    fetch_info() {
      fetch("http://localhost:3000/users/json") // fetch data from the specified URL
        .then(r => r.json()) // parse the response as JSON
        .then(json => {
          this.json = json // set the 'json' property to the parsed JSON data
          console.log(json) // log the data to the console
        })
        .catch(error => {
          console.log(error); // log any errors to the console
        })
    },

    
    async checkLogin(){
      const result = await fetch("http://localhost:3000/users/json") // fetch data from the specified URL
        .then(r => r.json()) // parse the response as JSON
        .then(json => {
          this.json = json // set the 'json' property to the parsed JSON data
          console.log(json) // log the data to the console
        })
        .catch(error => {
          console.log(error); // log any errors to the console
        })
      console.log("Made it here");
      var found = false;
      var i = 0;
      while (found == false && i < Object.keys(this.json).length){
        if (this.json[i].email == this.login.username){
          if (this.json[i].hash == this.login.password){
            found = true;
            break;
          }
        }
        i++;
      }
      if (found == true){
        console.log("Login successful");
        document.cookie=this.json[i].id;
        console.log(document.cookie);
        router.push('/aboutContact');
        this.$emit('refresh-navigation-bar');

      }
      else{
        console.log("Login failed");
      }
    },

  }
};
</script>

<template>
  <div class="login">
    <h1>Dan's Car Barn Login</h1>
    
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="login.username" required >
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"  v-model="login.password" required>
      </div>
      <button type="submit" @click="checkLogin()">Login</button>
    
  </div>
</template>

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
input[type="email"],
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
input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #007bff; /* change border color on focus */
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* add box shadow on focus */
}
button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
button[type="submit"]:hover {
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
