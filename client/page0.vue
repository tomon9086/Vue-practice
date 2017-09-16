<template>
	<div>
		<Hello who="John"></Hello>
		<Model></Model>
		<!-- <List v-bind:list="groceryList"></List> -->
		<List v-for="item in list" v-bind:list="item"></List>
	</div>
</template>

<script>
	const Hello = require("./hello.vue").default
	const Model = require("./model.vue").default
	const List = require("./list.vue").default
	module.exports = {
		components: {
			Hello,
			Model,
			List
		},
		data: function() {
			return {
				list: [
					{ id: 0, text: 'Vegetables' },
					{ id: 1, text: 'Cheese' },
					{ id: 2, text: 'Whatever else humans are supposed to eat' }
				]
			}
		},
		computed: {
			// setTestButtonCB: function() {
			// 	this.$store.state.testButtonCB = function() {
			// 		console.log("test button is clicked!")
			// 	}
			// }
		},
		methods: {
			ccc: function() {
				console.log(this.$data.vbuttonStates.clicked)
			}
		}
	}
</script>

<style scoped>
</style>
