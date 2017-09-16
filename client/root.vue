<template>
	<div>
		<Page0 v-if="isPage0"></Page0>
		<Page1 v-if="isPage1"></Page1>
		<Page2 v-if="isPage2"></Page2>
		<ProceedButton></ProceedButton>
	</div>
</template>

<script>
	const store = require("./store")
	const Page0 = require("./page0.vue").default
	const Page1 = require("./page1.vue").default
	const Page2 = require("./page2.vue").default
	const ProceedButton = require("./proceedButton.vue").default
	module.exports = {
		store,
		components: {
			Page0,
			Page1,
			Page2,
			ProceedButton
		},
		data: function() {
			return {}
		},
		computed: {
			isPage0() {
				return this.$store.getters.getPageNumber === 0
			},
			isPage1() {
				return this.$store.getters.getPageNumber === 1
			},
			isPage2() {
				return this.$store.getters.getPageNumber === 2
			}
		}
	}
</script>

<style scoped>
	
</style>
