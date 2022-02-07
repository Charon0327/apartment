<template>
  <div id="app">
    <Index />
  </div>
</template>
<script>
import '../src/css/index.scss'
import Index from './views/Index.vue'
export default {
  components:{
    Index
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
