<template>
	<view>
		<p>
			动态属性要拼接：=> :style="'height: '+clientHeight+'px;'"
		</p>
		<view >
			微信小程序在使用block标签的时候，会发现如果在这个标签里设置class样式的话，不会生效；
			
			因为block并不是一个组件，它仅仅是一个包装元素，只接受控制属性，不会在页面中做任何渲染；
			
			所以它能够设置if,for这些控制属性，但是设置class,id不会生效；
		</view>
		<view class="">
			::-webkit-scrollbar CSS伪类选择器影响了一个元素的滚动条的样式
			::-webkit-scrollbar — 整个滚动条.
			::-webkit-scrollbar-button — 滚动条上的按钮 (上下箭头).
			::-webkit-scrollbar-thumb — 滚动条上的滚动滑块.
			::-webkit-scrollbar-track — 滚动条轨道.
			::-webkit-scrollbar-track-piece — 滚动条没有滑块的轨道部分.
			::-webkit-scrollbar-corner — 当同时有垂直滚动条和水平滚动条时交汇的部分.
			::-webkit-resizer — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
