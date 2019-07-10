import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import Cinema from './views/cinema/cinema.vue'
import Hot from './views/hot/hto.vue'
import My from './views/my/my.vue'
import hotshowing from './views/home/tab/hotshowing.vue'
import page from './views/page/page.vue'
import Index from './views/index/index.vue'
import area from './views/area/ditu.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'index',
			component: Index,
			redirect: "/home/hotshowing",
			children:[
				{
					path: '/home',
					name: 'home',
					component: Home,
					redirect: "/home/hotshowing",
					children: [{
						path: "/home/hotshowing",
						name: 'hotshowing',
						component: hotshowing
					}, {
						path: "/home/soon",
						name: 'soon',
						component: () => import('./views/home/tab/soon.vue')
					}]
				},
				{
					path: '/cinema',
					name: "cinema",
					component: Cinema
				},
				{
					path: '/Hot',
					name: "Hot",
					component: Hot
				}, {
					path: '/My',
					name: "My",
					component: My
				},
			]
		},
		{
			path:'/page',
			name:'page',
			component:page
		},{
			path:"/area",
			name:'area',
			component:area
		}
	]
})
