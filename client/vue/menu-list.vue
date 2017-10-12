<template>
	<div class="item">
		{{ item.text }}
	</div>
</template>

<script>
	module.exports = {
		props: ["item"],
		data: function() {
			return {}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.item {
		margin-left: 40px;
		padding: 3px;
	}
</style>
