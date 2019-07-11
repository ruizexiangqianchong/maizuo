import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)
Vue.prototype.$axios=axios

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  
  ]
})
