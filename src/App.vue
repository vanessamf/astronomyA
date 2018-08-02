<template>
	<div id="app">
		<v-header :astronomyList="astronomyList" :astronomy="astronomy" :id="id"></v-header>
		<div class="tab ">
			<transition name="fade">
				<div class="tab-item">
					<router-link to="/today">今日</router-link>
				</div>
			</transition>
			<div class="tab-item">
				<router-link to="/tomorrow">明日</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/week">本周</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/month">本月</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/year">本年</router-link>
			</div>
		</div>

		<keep-alive>
			<!--路由外链-->
			<transition :name="transitionName">
				<router-view :astronomy="astronomy" :id="id" class="childView"></router-view>
			</transition>
		</keep-alive>
	</div>
</template>

<script type="text/ecmascript-6">
	import header from './components/header/header.vue';

	const ERR_OK = 0;

	export default {
		//name: 'App'
		data() {
			return {
				astronomy: {},
				astronomyList: [],
				id: "0",
				transitionName: 'slide-left'
				//				astronomyDetail:{
				//					 
				//				},astronomyToday:{
				//					 
				//				},astronomyTomorrow:{
				//					 
				//				},astronomyWeek:{
				//					 
				//				},astronomyMonth:{
				//					 
				//				},astronomyYear:{
				//					 
				//				}
			}
		},
		created() {
			if(localStorage.getItem('astroId') != null) {
				this.id = localStorage.getItem('astroId');
			}
			this.$http.get("/api/astronomyList").then((response) => {
				response = response.body;
				this.astronomy = response.data.result[this.id];
				this.astronomyList = response.data.result;
			});
		},
		watch: {
			'$route' (to, from) {
				const list = ['today', 'tomorrow', 'week', 'month', 'year'] // 将需要切换效果的路由名称组成一个数组
				const toName = to.name // 即将进入的路由名字
				const fromName = from.name // 即将离开的路由名字
				const toIndex = list.indexOf(toName) // 进入下标
				const fromIndex = list.indexOf(fromName) // 离开下标

				if(toIndex > -1 && fromIndex > -1) { // 如果下标都存在
					if(toIndex < fromIndex) { // 如果进入的下标小于离开的下标，那么是右滑
						this.transitionName = 'slide-right';
					} else {
						this.transitionName = 'slide-left'; // 如果进入的下标大于离开的下标，那么是左滑
					}
				}
			}
		},
		methods: {},
		components: {
			'v-header': header
		}
	}
</script>

<style>
	.tab {
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	
	.tab-item {
		flex: 1;
		text-align: center;
	}
	
	.tab-item a.active:after {
		display: block;
		content: " ";
		width: 100%;
		height: 1px;
		background: #17e8de;
		left: 0;
		top: 5px;
	}
	
	.tab-item a {
		display: block;
		font-size: 14px;
		color: rgb(77, 85, 93);
	}
	
	#app {
		position: relative;
	}
	
	.aaa {
		position: absolute;
		top: 24px;
	}
	
	.childView {
		position: absolute;
		width: 100%;
		transition: all .8s ease-in-out;
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(500px, 0);
		transform: translate(500px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-500px, 0);
		transform: translate(-500px, 0);
	}
</style>