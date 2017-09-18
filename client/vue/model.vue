<template>
	<div>
		<p>{{ message }}</p>
		<p><input v-model="input" v-on:keydown="changed"></p>
		<!-- はたして正しいのか -->
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				input: this.$store.getters.getModelVueMessage
			}
		},
		methods: {
			changed() {
				this.$store.dispatch("changeModelVueMessage", this.input)
			}
		},
		computed: {
			message() {
				return this.$store.getters.getModelVueMessage
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
