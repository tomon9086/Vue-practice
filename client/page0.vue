<template>
	<div>
		<Hello who="John"></Hello>
		<Model></Model>
	</div>
</template>

<script>
	const Hello = require("./hello.vue").default
	const Model = require("./model.vue").default
	module.exports = {
		components: {
			Hello,
			Model,
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
