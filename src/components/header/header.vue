<template>
	<div>
		<div class="header" ref="header" style="overflow: hidden;">
			<div class="img-wrapper">
				<img :src="astronomy.pic" alt="" />
			</div>
			<div class="content-wrapper">
				<div class="name" >{{astronomy.astroname}}</div>
				<div class="date">
					{{astronomy.date}}
				</div>
			</div>
			<div class="clearfloat"></div>
		    <span class="switch" @click="showList">切换</span>
		</div>
		<transition name="fade">
			<div v-show="astroShow" class="astroList">
				<transition name="fade">
				<div class="list-wrapper" v-show="astroShow">
					<h1 class="title">选择星座</h1>
					<ul>
						<li v-for="item in astronomyList":class="{active: activeItem == item|astronomy.astroid==item.astroid}" @click="selected(item,$event)">
							<img :src="item.pic" alt="" />
							<!--<span class="image">
							</span>-->
							<span class="name">{{item.astroname}}</span>
							<span class="date">
								(阳历{{item.date}})
							</span>
						</li>
					</ul>
					<i class="fa fa-times-circle-o list-close" aria-hidden="true" @click="hideList"></i>
				</div>
				</transition>
			</div>
		</transition>
	</div>
</template>

<script type="text/ecmascript-6">
	import VueRouter from 'vue-router';
	
	export default{
		props:{
			id:{
				type:String
			},
			astronomyList:{
				type:Array
			},
			astronomy: {
				type:Object
			},
		},
		data() {
			return {
//				astronomy: {},
//				astronomyList:[],
				astroShow:false,
				activeItem: '',
				astroId:0
			};
		},
		created() {
//			if(localStorage.getItem('id')!=null){
//				this.id = localStorage.getItem('id');
//			}
//			this.$http.get("/api/astronomyList").then((response) => {
//				console.log(response.data);
//				response=response.body;
//				console.log(response.data);
//				this.astronomy = response.data.result[this.id];
//				console.log(this.astronomy);
////				console.log(this.selectedAstro.astroid);
//				this.astronomyList = response.data.result;
//			});
		},
		methods: {
			showList() {
				this.astroShow=true;
				
//				document.getElementsByTagName("body").setAttribute('overflow','hidden');
//				document.getElementsByTagName("body")[0].setAttribute("style","overflow: hidden;");
				document.getElementsByTagName("body")[0].setAttribute("style","position: fixed;");
			},
			hideList() {
				this.astroShow=false;
				document.getElementsByTagName("body")[0].setAttribute("style","position:;");
//				parent.location.reload();
			},
			selected(item, event) {
//				debugger;
				this.activeItem = item;
//				this.astronomy = item;
				this.astroId=item.astroid-1;
//		        this.$refs.astro.show();
//				bus.$emit('astronomy1',this.astronomy);
//				bus.$emit('id',this.id); 
				if (this.astroId>=0) {  
	                //let condition = JSON.stringify(this.searchForm)  
	                localStorage.setItem('astroId', this.astroId)  
	            }else{  
	                localStorage.setItem('astroId', 0) 
	            }  
				this.$router.go(0);//刷新当前页面
				//parent.location.reload();
			}
		}
	}
</script>

<style>
	.header{
		position:relative;
		padding:24px 30px;
		background:#17e8de;
		/*vertical-align: middle;*/
	}
	.img-wrapper{
		position:relative;
		/*display: inline-block;*/
		float:left;
		width:60px;
		height:60px;
		padding:2px;
		border:1px solid #eee;
		border-radius:50%;
	}
	.img-wrapper img{
		width:56px;
		height:56px;
		margin:0 auto;
		/*vertical-align: middle;*/
		border-radius:50%;
		
		position:absolute;
		left:50%; 
		top: 50%; 
		margin-left: -28px;
		margin-top: -28px;
	}
	.content-wrapper{
		/*display: inline-block;*/
		float:left;
		margin-left:10%;
		
		padding:10px 0;
		color:#fff;
	}
	.content-wrapper .name{
	}
	
	.content-wrapper .date{
	}
	.header .switch{
		position:absolute;
		top:20px;
		right:50px;
		color:#fff;
		font-size:14px;
	}
	.header .switch:before{
		content: "\f021";
    		font: 14px/1 FontAwesome;
		margin-right:10px;
	}
	.astroList{
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index:10001;
		/*opacity:1;*/
		background: rgba(7,17,27,.4);
		text-align: center;
		
	}
	
	.astroList.fade-enter, .astroList.fade-leave-active{
		/*opacity:0;*/
		background: rgba(7, 17, 27, 0);
	}
	.astroList.fade-enter-active, .astroList.fade-leave-active{
			transition: all 0.5s	;
	}
	.list-wrapper.fade-enter, .list-wrapper.fade-leave-active{
			top:-50%;
	}
	.list-wrapper.fade-enter-active, .list-wrapper.fade-leave-active{
			transition: all 0.5s	;
	}
			
	.list-wrapper{
		position:absolute;
		width:80%;
		height:75%;
		/*margin:0 auto;*/
		background:#fff;
		left: 50%;
	    top: 50%;
	    /*top:-50%;*/
	    transform: translate(-50%,-50%);
	}
	
	.list-wrapper .title{
		
		font-size:16px;
		color:#17e8de;
		/*line-height:24px;*/
		padding:10px 0;
		font-weight:300;
		border-bottom:1px solid #17e8de;
	}
	.list-wrapper ul{
		height:83%;
		/*margin:0 auto;*/
		padding:10px 0;
		text-align: left;
		overflow:auto;
	}
	.list-wrapper li{
		font-size:14px;
		padding:10px 40px;
	}
	.list-wrapper li.active {
	  /*color: red;*/
	 background-color:rgba(153, 255, 255,0.3)
	}
	.list-wrapper img{
		
		display:inline;
		width:20px;
		height:20px;
		/*margin-top:5px;*/
		vertical-align: top;
	}
	.list-wrapper .name{
		margin:0 10px;
	}
	.list-wrapper .list-close{
		position:absolute;
		font-size:28px;
		color:#17e8de;
		top:8px;
		right:20px;
		/*font-weight:300;*/
	}
</style>