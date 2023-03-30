<script setup>
import TheDetail from "../components/TheDetail.vue";

</script>

<template>
  <main>
    <center>
      <h1>Car Details</h1>
      <p>{{ this.$route.params.id }}</p>
    </center>
  </main>
</template>
