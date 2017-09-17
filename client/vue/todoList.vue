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
				text: "",
				todoID: this.$store.getters.getTodoList.slice(-1)[0].id
			}
		},
		methods: {
			add: function() {
				// console.log(this.text)
				this.$data.todoID++
				this.$store.dispatch("pushTodo", {id: this.$data.todoID, text: this.text, done: false})
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
