<template>
	<div class="container">
		<div class="back" v-on:click="back" v-show="canPageBack">
			<div class="sankaku"></div>
			<span class="backText">Back</span>
		</div>
		<div class="proceed" v-on:click="proceed" v-show="canPageProceed">
			<div class="sankaku"></div>
			<span class="proceedText">Next</span>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
			}
		},
		methods: {
			back() {
				this.$store.dispatch("pageBack")
			},
			proceed() {
				this.$store.dispatch("pageProceed")
			}
		},
		computed: {
			canPageBack() {
				return 0 < this.$store.state.page
			},
			canPageProceed() {
				return this.$store.state.page < this.$store.state.maxPage
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 40px;
	}
	.back {
		--padding: 5px;
		--border: 2px;
		position: relative;
		user-select: none;
		background-color: #CFA;
		padding: var(--padding) 20px var(--padding) 15px;
		border-radius: 3px 3px 3px 3px;
		border: var(--border) solid #9C7;
		border-left-width: 0px;
		margin-left: 20px;
	}
	.back .sankaku {
		content: "";
		position: absolute;
		transform: translate(-47%, -50%) rotate(45deg) skew(10deg, 10deg) scale(0.85);
		left: 0;
		top: 50%;
		width: calc((1em + var(--padding) * 2 + var(--border) * 4) / 1.414);
		height: calc((1em + var(--padding) * 2 + var(--border) * 4) / 1.414);
		background-color: #CFA;
		border-radius: 0px 0px 0px 3px;
		border: var(--border) solid #9C7;
		border-top-width: 0px;
		border-right-width: 0px;
	}
	.back .sankaku:hover {
		cursor: pointer;
	}
	.back:hover {
		cursor: pointer;
	}
	.backText {
		color: #361;
	}
	.proceed {
		--padding: 5px;
		--border: 2px;
		position: relative;
		user-select: none;
		background-color: #CFA;
		padding: var(--padding) 15px var(--padding) 20px;
		border-radius: 3px 3px 3px 3px;
		border: var(--border) solid #9C7;
		border-right-width: 0px;
		margin-right: 20px;
	}
	.proceed .sankaku {
		content: "";
		position: absolute;
		transform: translate(47%, -50%) rotate(45deg) skew(10deg, 10deg) scale(0.85);
		right: 0;
		top: 50%;
		width: calc((1em + var(--padding) * 2 + var(--border) * 4) / 1.414);
		height: calc((1em + var(--padding) * 2 + var(--border) * 4) / 1.414);
		background-color: #CFA;
		border-radius: 0px 3px 0px 0px;
		border: var(--border) solid #9C7;
		border-left-width: 0px;
		border-bottom-width: 0px;
	}
	.proceed .sankaku:hover {
		cursor: pointer;
	}
	.proceed:hover {
		cursor: pointer;
	}
	.proceedText {
		color: #361;
	}
</style>
