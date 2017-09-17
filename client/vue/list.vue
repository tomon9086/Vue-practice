<template>
	<div class="list"><input type="checkbox" v-on:change="changed" :checked="isChecked" /> <span :class="{ 'disactive': isChecked }">{{ list.text }}</span></div>
</template>

<script>
	module.exports = {
		props: ["list"],
		methods: {
			changed() {
				this.$store.dispatch("todoCheckboxChanged", this.list.id)
				console.log(this.$store.getters.getTodoList)
			}
		},
		computed: {
			isChecked() {
				return this.$store.getters.getTodoList[this.list.id].done
			}
		}
	}
</script>

<style scoped>
	.list {
		margin: 10px 3px 3px 20px;
	}
	.disactive {
		color: #CCC;
	}
</style>