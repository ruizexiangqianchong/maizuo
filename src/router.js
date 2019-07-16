import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/public/login.vue'
import Fuye from '@/views/user/fuye.vue'
import shouye from '@/views/default/index.vue'
import MyMsg from '@/views/user/myMsg.vue'
import Search from '@/views/search/search.vue'
import NavIndex from '@/views/search/search-item/search-nav-item/nav-index.vue'
Vue.use(Router)


export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: "/",
			name: "index",
			redirect: {
				name: "shouye"
			}
		},
		{
			path: '/search',
			name: "search",
			component: Search,
			redirect: '/search/index',
			children: [{
					path: '/search/index',
					name: "searchIndex",
					component: () => import('@/views/search/search-item/search-index.vue'),
				},
				{
					path: '/search/comprehensive',
					name: "searchComprehensive",
					component: () => import('@/views/search/search-item/search-comprehensive.vue'),
					redirect:'/search/comprehensive/index',
					children: [{
						path: '/search/comprehensive/index',
						name: "navindex",
						component: NavIndex,
					},
					{
						path: '/search/comprehensive/songs',
						name: "songs",
						component:  () => import('@/views/search/search-item/search-nav-item/search-songs.vue'),
					}
					]
				}
			]
		},
		{
			path: '/shouye',
			name: "shouye",
			component: shouye,
		}, {
			path: '/fuye',
			name: "Fuye",
			component: Fuye,
			children: [{
					path: "/fuye/myMsg",
					name: "myMsg",
					component: MyMsg,
					redirect: '/fuye/myMsg/private',
					children: [{
							path: "/fuye/myMsg/private",
							name: "private",
							component: () => import('@/views/user/MyMsg-item/private.vue')
						}, {
							path: "/fuye/myMsg/comment",
							name: "comment",
							component: () => import('@/views/user/MyMsg-item/comment.vue')
						},
						{
							path: "/fuye/myMsg/callme",
							name: "callme",
							component: () => import('@/views/user/MyMsg-item/callme.vue')
						},
						{
							path: "/fuye/myMsg/inform",
							name: "inform",
							component: () => import('@/views/user/MyMsg-item/inform.vue')
						}
					]
				},

			]
		},
		{
			path: '/friend',
			name: "friend",
			component: () => import('@/views/friendcenter/friend.vue')
		},

		{
			path: "/login",
			name: "login",
			component: Login
		},
	]
})
