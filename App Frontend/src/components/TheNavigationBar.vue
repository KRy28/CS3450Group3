<template>
  <nav>
    <RouterLink class="link" to="/">Home</RouterLink>
    <RouterLink class="link" to="/aboutContact">About/Contact</RouterLink>
    <RouterLink class="link" to="/search">Search</RouterLink>
    <RouterLink class="link" to="/list/null/null/null/null">All Cars</RouterLink>
    <!-- <RouterLink class="link" to="/cart">Cart</RouterLink> -->
    <RouterLink class="link" to="/login">Login</RouterLink>

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
