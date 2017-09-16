const Vue = require("vue")
const Vuex = require("vuex")

Vue.use(Vuex)

module.exports = new Vuex.Store({
	state: {
		testButtonCB() {
			console.log("test button is clicked!")
		}
	},
	mutations: {
	},
	getters: {
	},
	actions: {
	}
})
