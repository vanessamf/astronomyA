<template>
	<div>
		<div class="top">{{astronomyDetail.time}}</div>
		<div class="content-container">
			<ul>
				<li v-if="astronomyDetail.summary_star">
					<span>综合运势：</span>
					<star :size="36" :score="astronomyDetail.summary_star"></star>
				</li>
				<li v-if="astronomyDetail.love_star">
					<span>爱情运势：</span>
					<star :size="36" :score="astronomyDetail.love_star"></star>
				</li>
				<li v-if="astronomyDetail.work_star">
					<span>事业运势：</span>
					<star :size="36" :score="astronomyDetail.work_star"></star>
				</li>
				<li v-if="astronomyDetail.money_star">
					<span>财富运势：</span>
					<star :size="36" :score="astronomyDetail.money_star"></star>
				</li>
				<li v-if="astronomyDetail.health">
					<span>健康指数：</span>
					<star :size="36" :score="astronomyDetail.health"></star>
				</li>
				<li v-if="astronomyDetail.general_index">
					<span>综合指数：</span>
					<span class="text">{{astronomyDetail.general_index}}</span>
				</li>
				<li v-if="astronomyDetail.love_index">
					<span>爱情指数：</span>
					<span class="text">{{astronomyDetail.love_index}}</span>
				</li>
				<li v-if="astronomyDetail.money_index">
					<span>财富指数：</span>
					<span class="text">{{astronomyDetail.money_index}}</span>
				</li>
				<li v-if="astronomyDetail.work_index">
					<span>事业指数：</span>
					<span class="text">{{astronomyDetail.work_index}}</span>
				</li>
				<li v-if="astronomyDetail.lucky_color">
					<span>幸运颜色：</span>
					<span class="text">{{astronomyDetail.lucky_color}}</span>
				</li>
				<li v-if="astronomyDetail.lucky_num">
					<span>幸运数字：</span>
					<span class="text">{{astronomyDetail.lucky_num}}</span>
				</li>
				<li v-if="astronomyDetail.lucky_day">
					<span>幸运日期：</span>
					<span class="text">{{astronomyDetail.lucky_day}}</span>
				</li>
				<li v-if="astronomyDetail.yfxz">
					<span>缘分星座：</span>
					<span class="text">{{astronomyDetail.yfxz}}</span>
				</li>
				<li v-if="astronomyDetail.grxz">
					<span>贵人星座：</span>
					<span class="text">{{astronomyDetail.grxz}}</span>
				</li>
				<li v-if="astronomyDetail.xrxz">
					<span>小人星座：</span>
					<span class="text">{{astronomyDetail.xrxz}}</span>
				</li>
				<li v-if="astronomyDetail.lucky_time">
					<span>吉时：</span>
					<span class="text">{{astronomyDetail.lucky_time}}</span>
				</li>
				<li v-if="astronomyDetail.lucky_direction">
					<span>吉利方位：</span>
					<span class="text">{{astronomyDetail.lucky_direction}}</span>
				</li>
				<!--<li v-if="astronomyDetail.day_notice">
					<span>今日提醒：</span>
					<span class="text">{{astronomyDetail.day_notice}}</span>
				</li>-->
				<!--<li>
					<span>短评：</span>
					<span class="text">{{astronomyToday.presummary}}</span>
				</li>-->
			</ul>
			<div class="clearfloat"></div>
			<div class="presummary" v-if="astronomyDetail.day_notice">
				<span class="title">今日提醒：</span>
				<span class="text">{{astronomyDetail.day_notice}}</span>
			</div>
			<div class="presummary" v-if="astronomyDetail.week_notice">
				<span class="title">本周提醒：</span>
				<span class="text">{{astronomyDetail.week_notice}}</span>
			</div>
			<div class="presummary" v-if="astronomyDetail.month_advantage">
				<span class="title">本月优势：</span>
				<span class="text">{{astronomyDetail.month_advantage}}</span>
			</div>
			<div class="presummary" v-if="astronomyDetail.month_weakness">
				<span class="title">本月弱势：</span>
				<span class="text">{{astronomyDetail.month_weakness}}</span>
			</div>
			<div class="presummary" v-if="astronomyDetail.oneword">
				<span class="title">一句话简评：</span>
				<span class="text">{{astronomyDetail.oneword}}</span>
			</div>
		</div>
		<div class="desc-container">
			<ul>
				<li v-if="astronomyDetail.general_txt">
					<div class="title-content">
						<i class=""></i>
						<span>综合运势</span>
					</div>
					<p>{{astronomyDetail.general_txt}}</p>
				</li>
				<li v-if="astronomyDetail.love_txt">
					<!--<i class="fa fa-heart"></i>-->
					<div class="title-content">
						<i></i>
						<span>爱情运势</span>
					</div>
					<p>{{astronomyDetail.love_txt}}</p>
				</li>
				<li v-if="astronomyDetail.work_txt">
					<div class="title-content">
						<i></i>
						<span>事业运势</span>
					</div>
					<p>{{astronomyDetail.work_txt}}</p>
				</li>
				<li v-if="astronomyDetail.money_txt">
					<div class="title-content">
						<i></i>
						<span>财富运势</span>
					</div>
					<p>{{astronomyDetail.money_txt}}</p>
				</li>
				<li v-if="astronomyDetail.health_txt">
					<div class="title-content">
						<i class="fa fa-heartbeat"></i>
						<span>健康运势</span>
					</div>
					<p>{{astronomyDetail.health_txt}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import star from '@/components/star/star.vue';
	export default {
		//		data() {
		//			return {
		//				astronomyDetail: {},
		//			}
		//		},
		props: {
			astronomy: {
				type: Object
			},
			detail: {
				type: String
			},
			astronomyDetail: {

			},
		},

		//		created() {
		//			this.$http.get("/api/astronomyDetail").then((response) => {
		//				console.log(response.data);
		//				response=response.body;
		//				console.log(response.data);
		//				console.log(this.detail);
		//				let detail=this.detail;
		//				this.astronomyDetail = response.data.result.detail;
		////				this.$set(this, 'astronomyDetail', response.data.result.detail);
		//			});
		//		},
		components: {
			star
		}
	}
</script>

<style>
	@import "../../common/css/common.css";
</style>