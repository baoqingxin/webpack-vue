import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
Vue.use(VueRouter)

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App />'
})