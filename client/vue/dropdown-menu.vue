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
			<div :class="{ list, 'list-opened': isopen, 'list-closed': !isopen }">
				<MenuList v-for="item in list" :item="item"></MenuList>
			</div>
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
	.list-closed {
		height: 0;
		font-size: 0;
		opacity: 0;
		padding: 0;
		transition-property: opacity;
		transition-duration: 0.1s;
	}
	.list-opened {
		transition-property: opacity;
		transition-duration: 0.4s;
	}
</style>
