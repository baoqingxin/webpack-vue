<template>
  <div id="app">
    <!-- <router-view/> -->
    {{date}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      date: new Date()
    }
  }
}
</script>

<style>

</style>
