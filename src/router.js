import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/public/login.vue'
import Fuye from '@/views/user/fuye.vue'

Vue.use(Router)


export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path:"/",
			name:"index",
		},
		{
		path: "/login",
		name: "login",
		component: Login
	},{
					path:"/fuye",
					name:"fuye",
					component:Fuye
				}]
})
