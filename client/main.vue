<template>
	<div>
		<h3>Todo</h3>
		<TodoList></TodoList>
	</div>
</template>

<script>
	// const Add = require("./add.vue").default
	// const List = require("./list.vue").default
	module.exports = {
		components: {
			TodoList: require("./TodoList.vue").default
		}
	}
</script>

<style scoped>
</style>
