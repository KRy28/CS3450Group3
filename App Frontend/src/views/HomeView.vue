<template>
  <main>
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <center>
            <h1>Dan's Car Barn</h1>
            <h2>Rent-A-Car</h2>
            <RouterLink class="buttons" to="/search">Search </RouterLink>
            <RouterLink class="buttons" to="/aboutContact">About Us</RouterLink>
            <RouterLink class="buttons" to="/aboutContact">Contact Us</RouterLink>
            <RouterLink v-if="!loggedIn()" class="buttons" to="/login">Log In</RouterLink>
      </center>
  </div>
  </main>
</template>

<script>
  export default {
    methods: {
    loggedIn(){
      console.log("THe current damn cookie: " + document.cookie);
      if (document.cookie == "null" || document.cookie == ""){
        console.log("Not logged in");
        return false;
      }
      else{
        console.log("Logged in");
        return true;
      }
    }
    
  }
  }
</script>

<style>
.buttons{
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  margin: 10px;
}
.buttons:hover {
  background-color: #0069d9; /* darken background color on hover */
}
</style>
