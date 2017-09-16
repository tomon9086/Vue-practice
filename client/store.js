const Vue = require("vue")
const Vuex = require("vuex")

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		testButton() {
			store.state.count++
		},
		resetButton() {
			if(store.state.count)store.state.count = 0
		}
	},
	getters: {
		testButton() {
			return store.state.count
		},
		resetButton() {
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
		}
	}
})

module.exports = store
