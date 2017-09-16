const Vue = require("vue")
const Vuex = require("vuex")

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		page: 0,
		maxPage: 2,
		// todoList: [],
		todoList: [{text: "hoge"}, {text: "hogehoge"}, {text: "hogehogehoge"}]
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
		},
		pushTodo(context, todo) {
			store.state.todoList.push(todo)
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
		},
		getTodoList() {
			return store.state.todoList
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
		},
		pushTodo(context, todo) {
			store.commit("pushTodo", todo)
		}
	}
})

module.exports = store
