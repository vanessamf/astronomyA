<template>
	<div>
		<common :astronomyDetail="astronomyToday"></common>
	</div>
</template>

<script type="text/ecmascript-6">
	import common from '@/components/common/common.vue';
	
	export default{
		props:{
			id:{
				type:String
			}
		},
		data() {
			return {
				astronomyDetail:{},
				astronomyToday: {},
				baiyang:'baiyang',
			}
		},
		created() {
			this.$http.get("/api/astronomyDetail").then((response) => {
				//debugger;
				response=response.body;
				this.astronomyDetail=response.data;
				this.astronomyToday = response.data.showapi_res_body[this.id].day;
//				this.$set(this, 'astronomyDetail', response.data.result.detail);
			});
		},
		methods:{
		},
		computed:{
		},
		mounted(){
		},
		components: {
			common
		}
	}
</script>

<style >
</style>