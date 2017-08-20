<template>
	<div>
		<Hello who="John"></Hello>
		<Model></Model>
		<List v-for="item in groceryList" v-bind:todo="item"></List>
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
		data: {
			groceryList: [
				{ id: 0, text: 'Vegetables' },
				{ id: 1, text: 'Cheese' },
				{ id: 2, text: 'Whatever else humans are supposed to eat' }
			]
		}
	}
</script>

<style scoped>
</style>
