<template>
	<div class="container">
		<div class="button" v-on:click="clicked">
			<span class="text">{{ text }}</span>
		</div>
	</div>
</template>

<script>
	const store = require("./store")
	module.exports = {
		store,
		props: ["text"],
		methods: {
			clicked: function() {
				// console.log(this.$store)
				this.$store.state.testButtonCB()
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button {
		user-select: none;
		background-color: #CFA;
		padding: 5px 20px;
		border-radius: 20px;
		border: 2px solid #9C7;
	}
	.button:hover {
		cursor: pointer;
	}
	.text {
		color: #361;
	}
</style>
