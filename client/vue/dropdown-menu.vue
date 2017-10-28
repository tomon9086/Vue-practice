<template>
	<div class="container">
		<div>
			<div class="list-title" v-on:click="openMenu">
				<div>
					<span>
						<span v-if="isopen">▼</span>
						<span v-else>▶︎</span>
						Click me!
					</span>
				</div>
			</div>
			<transition name="list-fade">
				<div v-if="isopen">
					<MenuList v-for="item in list" :item="item"></MenuList>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	module.exports = {
		components: {
			MenuList: require("./menu-list.vue").default
		},
		data: function() {
			return {
				// list: [{ text: "hoge" }, { text: "hoge" }, { text: "hoge" }],
				isopen: false
			}
		},
		methods: {
			openMenu() {
				this.$data.isopen = !this.$data.isopen
			}
		},
		computed: {
			list() {
				return this.$store.getters.getTodoList
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/*margin-top: 20px;*/
	}
	.container > div {
		width: 40%;
		margin-bottom: 10px;
	}
	.list-title {
		font-size: 17px;
		user-select: none;
		margin-bottom: 3px;
	}
	.list-title > div > span {
		cursor: pointer;
	}
	.list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/*align-items: center;*/
		padding-bottom: 10px;
	}
	.list-fade-enter-active {
		transition: opacity .5s
	}
	.list-fade-leave-active {
		transition: opacity .2s
	}
	.list-fade-enter, .list-fade-leave-to {
		opacity: 0
	}
</style>
