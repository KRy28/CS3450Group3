<template>
  <TheNavigationBar id="navigation"/>
    
  <!-- eslint-disable vue/no-multiple-template-root -->
  <div id="content">
    <RouterView />
  </div>
  <!-- eslint-enable -->  
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import TheNavigationBar from "./components/TheNavigationBar.vue";
export default {
  components: {
    TheNavigationBar
  },
  data () {
    return {
      hi: 'hello!'
    }
  }
}
</script>


<style scoped>
</style>
