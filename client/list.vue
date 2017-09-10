<template>
	<div class="list"><input type="checkbox" v-model="isChecked" /> <span :class="{ 'disactive': isChecked }">{{ list.text }}</span></div>
</template>

<script>
	module.exports = {
		props: ["list"],
		data() {
			return {
				isChecked: false
			}
		}
	}
</script>

<style scoped>
	.list {
		margin: 10px 3px 3px 20px
	}
	.disactive {
		color: #CCC
	}
</style>
