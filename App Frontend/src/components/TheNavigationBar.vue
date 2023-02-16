<template>
  <nav>
    <RouterLink class="link" to="/">Home</RouterLink>
    <RouterLink class="link" to="/about">About</RouterLink>
    <RouterLink class="link" to="/contact">Contact</RouterLink>
    <RouterLink class="link" to="/search">Search</RouterLink>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  nav {
    background-color: darkorange;
    color: white;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-around;
  }
  
  .link {
    color: white;
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 1em;
  }
  
  .link:hover {
    outline: 1px solid black;
  }
</style>
