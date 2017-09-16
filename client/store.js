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
		}
	},
	getters: {
		testButton() {
			return store.state.count
		}
	},
	actions: {
		testButton() {
			store.commit("testButton")
			console.log("test button is clicked!")
		}
	}
})

module.exports = store
