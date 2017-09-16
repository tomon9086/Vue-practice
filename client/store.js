const Vue = require("vue")
const Vuex = require("vuex")

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		page: 0,
		maxPage: 2
	},
	mutations: {
		testButton() {
			store.state.count++
		},
		resetButton() {
			if(store.state.count)store.state.count = 0
		},
		pageBack() {
			if(0 < store.state.page)store.state.page--
		},
		pageProceed() {
			if(store.state.page < store.state.maxPage)store.state.page++
		}
	},
	getters: {
		testButton() {
			return store.state.count
		},
		resetButton() {
		},
		getPageNumber() {
			return store.state.page
		}
	},
	actions: {
		testButton() {
			store.commit("testButton")
			console.log("test button is clicked!")
		},
		resetButton() {
			store.commit("resetButton")
			console.log("count is reset!")
		},
		pageBack() {
			store.commit("pageBack")
		},
		pageProceed() {
			store.commit("pageProceed")
		}
	}
})

module.exports = store
