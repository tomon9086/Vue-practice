<template>
	<div>
		<Hello who="John"></Hello>
		<Model></Model>
		<!-- <List v-bind:list="groceryList"></List> -->
		<List v-for="item in list" v-bind:list="item"></List>
		<VButton text="click me" v-bind:states="vbuttonStates"></VButton>
	</div>
</template>

<script>
	const Hello = require("./hello.vue").default
	const Model = require("./model.vue").default
	const List = require("./list.vue").default
	const VButton = require("./vbutton.vue").default
	const $ = require("jquery")
	module.exports = {
		components: {
			Hello,
			Model,
			List,
			VButton
		},
		data: {
			list: [
				{ id: 0, text: 'Vegetables' },
				{ id: 1, text: 'Cheese' },
				{ id: 2, text: 'Whatever else humans are supposed to eat' }
			],
			vbuttonStates: {
				clicked: false,
				cb: function() {
					// console.log("hello", this.clicked)
					$.get("/", function(res) {
						console.log(res)
					})
				}
			}
		}
	}
</script>

<style scoped>
</style>
