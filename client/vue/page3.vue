<template>
	<div>
		<DropdownMenu></DropdownMenu>
		<DropdownMenu></DropdownMenu>
	</div>
</template>

<script>
	module.exports = {
		components: {
			DropdownMenu: require("./dropdown-menu.vue").default
		},
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

</style>
