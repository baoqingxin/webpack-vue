<template>
  <div id="app">
    <img :src="require('./assets/logo.png')">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
body, ul, li {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('./assets/Grassland_Scenery_by_Shi_Yuejun.jpg') no-repeat;
  background-size: 100%;
}
</style>
