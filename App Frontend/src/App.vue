<template>
  <TheNavigationBar id="navigation"/>
    
  <!-- eslint-disable vue/no-multiple-template-root -->
  <div id="content">
    <span class="greeting" v-if="user">Hello {{ user.username }}! You have {{ user.wallet }} dollar(s)</span>
    <RouterView />
  </div>
  <!-- eslint-enable -->  
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import TheNavigationBar from "./components/TheNavigationBar.vue";
export default {
  components: {
    TheNavigationBar,
  },
  data () {
    return {
      hi: 'hello!'
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>


<style scoped>
</style>
