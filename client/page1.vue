<template>
	<div>
		<VButton text="click me" method="testButton"></VButton>
		<VButton text="reset" method="resetButton"></VButton>
	</div>
</template>

<script>
	const VButton = require("./vbutton.vue").default
	module.exports = {
		components: {
			VButton
		},
		methods: {
			ccc: function() {
				console.log(this.$data.vbuttonStates.clicked)
			}
		}
	}
</script>

<style scoped>
	
</style>
