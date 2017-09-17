const Vue = require("vue")
const Vuex = require("vuex")

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		page: 0,
		maxPage: 2,
		// todoList: [],
		todoList: [{id: 0, text: "hoge", done: false}, {id: 1, text: "hogehoge", done: false}, {id: 2, text: "hogehogehoge", done: false}]
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
		},
		todoCheckboxChanged(context, id) {
			store.state.todoList[id].done = !store.state.todoList[id].done
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
		getMaxPageNumber() {
			return store.state.maxPage
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
		},
		todoCheckboxChanged(context, id) {
			store.commit("todoCheckboxChanged", id)
		}
	}
})

module.exports = store
