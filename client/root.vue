<template>
	<div>
		<div class="header"><h3>Vue Practice</h3></div>
		<div class="container">
			<Page0 v-if="isPage0"></Page0>
			<Page1 v-if="isPage1"></Page1>
			<Page2 v-if="isPage2"></Page2>
		</div>
		<div class="footer">
			<ProceedButton></ProceedButton>
			<div class="copyright">© 2017 <a href="https://github.com/tomon9086/Vue-practice" target="_blank">tomon9086</a></div>
		</div>
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
	.header {
		background-color: #373;
		color: #FFF;
		padding: 5px 10px 5px 10px;
	}
	.container {
		width: 100%;
		position: relative;
		min-height: 100%;
	}
	.footer {
		background-color: #373;
		color: #FFF;
		/*height: 140px;*/
		padding-bottom: 10px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.copyright {
		padding: 5px;
	}
	.copyright a {
		color: #FFF;
	}
</style>
