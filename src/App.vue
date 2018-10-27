<template>
  <div id="app">
    <router-view :ngoUser="ngoUser"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    const ngoUser = {
      ngo: '1254896445',
      state: 'Kano',
      lga: 'Demse',
    };
    return {
      ngoUser
    };
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
