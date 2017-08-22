<template>
	<div>
		<p>{{ greeting }} {{ target }}!</p>
		<p><button v-on:click="reverseMessage">Reverse Message</button></p>
	</div>
</template>

<script>
	module.exports = {
		props: ["who"],
		data: function() {
			return {
				greeting: "Hello"
			}
		},
		methods: {
			reverseMessage: function() {
				// console.log(this)
				this.$data.greeting = this.$data.greeting.split('').reverse().join('')
			}
		},
		computed: {
			target: function() {
				return this.who !== undefined ? this.who : "World"
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
