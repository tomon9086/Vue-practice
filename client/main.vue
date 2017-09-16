<template>
	<div>
		<Hello who="John"></Hello>
		<Model></Model>
		<!-- <List v-bind:list="groceryList"></List> -->
		<List v-for="item in list" v-bind:list="item"></List>
		<VButton text="click me"></VButton>
	</div>
</template>

<script>
	const store = require("./store")
	const Hello = require("./hello.vue").default
	const Model = require("./model.vue").default
	const List = require("./list.vue").default
	const VButton = require("./vbutton.vue").default
	module.exports = {
		store,
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
			]
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
