<template>
  <main>
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <center>
            <h1>Dan's Car Barn</h1>
            <h2>Rent-A-Car</h2>
            <RouterLink class="buttons" to="/search">Search </RouterLink>
            <RouterLink class="buttons" to="/aboutContact">About Us</RouterLink>
            <RouterLink class="buttons" to="/aboutContact">Contact Us</RouterLink>
            <RouterLink class="buttons" to="/login">Log In</RouterLink>
      </center>
  </div>
  </main>
</template>

<script>
  export default {
    name: 'HomeView'
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
