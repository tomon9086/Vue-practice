<template>
	<div class="container">
		<TodoList></TodoList>
	</div>
</template>

<script>
	const TodoList = require("./todoList.vue").default
	module.exports = {
		components: {
			TodoList
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
	}
</style>
