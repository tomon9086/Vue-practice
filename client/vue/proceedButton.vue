<template>
	<div class="outside-container">
		<div class="inside-container">
			<div class="back" v-on:click="back" v-show="canPageBack">
				<div class="sankaku"></div>
				<span class="backText">Back</span>
			</div>
		</div>
		<div class="inside-container">
			<div class="proceed" v-on:click="proceed" v-show="canPageProceed">
				<div class="sankaku"></div>
				<span class="proceedText">Next</span>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
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
				return 0 < this.$store.getters.getPageNumber
			},
			canPageProceed() {
				return this.$store.getters.getPageNumber < this.$store.getters.getMaxPageNumber
			}
		}
	}
</script>

<style scoped>
	.outside-container {
		display: flex;
		margin-top: 20px;
	}
	.inside-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 50%;
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
