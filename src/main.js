import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/flexble.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from "axios"
import { Indicator } from 'mint-ui';
import '@/views/user/MyMsg-item/filter.js'
import './assets/fonts/iconfont.css'


axios.interceptors.request.use(function (config) {
	Indicator.open();
    return config;
  }) //config就是拦截的请求数据，里面包含了这次请求的url，数据等

axios.interceptors.response.use(function(response) {
	Indicator.close();
	return response;
}) //这一步就可以拦截请求，response就是axios返回的res数据，内含服务器响应的数据

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
