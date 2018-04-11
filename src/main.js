// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import VueResource from 'vue-resource'

import today from '@/components/today/today.vue'
import tomorrow from '@/components/tomorrow/tomorrow.vue'
import week from '@/components/week/week.vue'
import month from '@/components/month/month.vue'
import year from '@/components/year/year.vue'

//import router from './router'

Vue.use(VueRouter);
Vue.use(VueResource); // 注册;
Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
	routes: [{
			path: '/today',
			name: 'today',
			component: today,
			//		params:{name:"1"},
			meta: {
				keepAlive: true
			}
		}, {
			path: '/tomorrow',
			name: 'tomorrow',
			component: tomorrow,
			meta: {
				keepAlive: true
			}
		},
		{
			path: '/week',
			name: 'week',
			component: week,
			meta: {
				keepAlive: true
			}
		}, {
			path: '/month',
			name: 'month',
			component: month,
			meta: {
				keepAlive: true
			}
		}, {
			path: '/year',
			name: 'year',
			component: year,
			meta: {
				keepAlive: true
			}
		},
		{
			path: '/',
			redirect: '/today'
		},
	],
	linkActiveClass: 'active'
})

new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})

//router.push('/today'); // 加了这个以后就可以默认是今天