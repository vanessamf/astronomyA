<template>
	<div id="">
		<common :astronomyDetail="astronomyYear"></common>
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
				year:"year",
				astronomyYear: {},
			}
		},
		created() {
			this.$http.get("/api/astronomyDetail").then((response) => {
				response=response.body;
				this.astronomyYear = response.data.showapi_res_body[this.id].year;
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