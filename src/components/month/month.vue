<template>
	<common :astronomyDetail="astronomyMonth"></common>
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
				astronomyMonth: {},
			}
		},
		created() {
			this.$http.get("/api/astronomyDetail").then((response) => {
				response=response.body;
				this.astronomyMonth = response.data.showapi_res_body[this.id].month;
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