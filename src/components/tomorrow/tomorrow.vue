<template>
	<common :astronomyDetail="astronomyTomorrow"></common>
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
				astronomyTomorrow: {},
			}
		},
		created() {
			this.$http.get("/api/astronomyDetail").then((response) => {
				response=response.body;
				this.astronomyTomorrow = response.data.showapi_res_body[this.id].tomorrow;
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