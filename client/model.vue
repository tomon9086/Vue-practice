<template>
	<div>
		<p>{{ message }}</p>
		<p><input v-model="message"></p>
	</div>
</template>

<script>
	module.exports = {
		// props: ["who"],
		data: function() {
			return {
				message: "Hello Vue!"
			}
		},
		// methods: {
		// 	reverseMessage: function() {
		// 	}
		// },
		// computed: {
		// 	target: function() {
		// 		return this.who !== undefined ? this.who : "World"
		// 	}
		// }
	}
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>
