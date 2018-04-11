<template>
	<common :astronomyDetail="astronomyWeek"></common>
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
				astronomyWeek: {},
			}
		},
		created() {
			this.$http.get("/api/astronomyDetail").then((response) => {
				response=response.body;
				this.astronomyWeek = response.data.showapi_res_body[this.id].week;
//				this.$set(this, 'astronomyDetail', response.data.result.detail);
			});
		},
		components: {
			common
		}
	}
</script>

<style >
</style>