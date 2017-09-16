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
				// todos: []
				todos: [{text: "hoge"}, {text: "hogehoge"}, {text: "hogehogehoge"}]
			}
		},
		methods: {
			add: function() {
				console.log(this.text)
				this.$data.todos.push({text: this.text})
				this.text = ""
			}
		}
	}
</script>

<style scoped>
</style>
