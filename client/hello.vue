<template>
	<div>
		<p>{{ greeting }} World!</p>
		<p><button v-on:click="reverseMessage">Reverse Message</button></p>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				greeting: "Hello"
			}
		},
		methods: {
			reverseMessage: function() {
				console.log(this)
				this.$data.greeting = this.$data.greeting.split('').reverse().join('')
			}
		}
	}
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>
