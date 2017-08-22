<template>
	<div class="container">
		<div class="button" v-on:click="clicked">
			<span class="text">{{ text }}</span>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["text", "states"],
		methods: {
			clicked: function() {
				this.states.clicked = !this.states.clicked
				this.states.cb()
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
