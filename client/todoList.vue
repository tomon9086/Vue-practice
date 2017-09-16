<template>
	<div>
		<div><input type="text" v-model="text" /><button v-on:click="add">追加</button></div>
		<List v-for="todo in todos" v-bind:list="todo"></List>
	</div>
</template>

<script>
	module.exports = {
		components: {
			List: require("./list.vue").default
		},
		data: function() {
			return {
				text: ""
			}
		},
		methods: {
			add: function() {
				// console.log(this.text)
				const todoText = this.text
				this.$store.dispatch("pushTodo", {text: todoText})
				this.text = ""
			}
		},
		computed: {
			todos() {
				return this.$store.getters.getTodoList
			}
		}
	}
</script>

<style scoped>
</style>
