<template>
	<div id="GoodsItem" class="goods" @click='jumpDetails'>
		<img :src="imgsrc" @load='imgload'>
		<div class="goodsbootm">
			<p>{{goodsitem.title}}</p>
			<span>￥{{goodsitem.price}}</span>
			<span>{{goodsitem.cfav}}</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'GoodsItem',
		props:{
			goodsitem:{
				type:Object,
				default:{}
			}
		},
		computed:{
			imgsrc(){
				return (this.goodsitem.image||this.goodsitem.show.img)
			}
		},
    methods:{
      imgload(){//图片加载完成后将状态提交给事件总线保存,然后在myscroll中使用
        this.$bus.$emit('imgloaded');
      },
      jumpDetails(){
      	this.$router.push('/details/'+this.goodsitem.iid)
      }
    }
	}
</script>
<style lang="stylus" scoped>
	.goods
		width 25vh
		margin-top 10px
		img
			width 100%
			border-radius 5px
	.goodsbootm
		padding 5px 10px 2px 10px
		p
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
			margin 0 0 3px 0
		span:nth-of-type(1)
			color red
			float left
			margin-left 5px
		span:nth-of-type(2)
			right 5px
			float right
			position relative
			&::before
				content ' '
				display block
				width 14px
				height 14px
				left -16px
				top 1px
				position absolute
				background url('~@/assets/images/common/collect.svg') 0 0/14px 14px
				vertical-align middle
</style>