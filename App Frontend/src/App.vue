<template>
  <TheNavigationBar @refresh-navigation-bar="refreshNavigationBar" id="navigation"/>
    
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
    TheNavigationBar,
  },
  data () {
    return {
      hi: 'hello!',
      counter: 0
    };
  },
  methods: {
    refreshNavigationBar: function() {
      console.log("Made it to refresh");
      this.$forceUpdate();
      this.counter += 1;
    },
  }
}
</script>


<style scoped>
</style>
