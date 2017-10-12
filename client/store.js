const Vue = require("vue")
const Vuex = require("vuex")

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		page: 0,
		maxPage: 3,
		// todoList: [],
		todoList: [
			{id: 0, text: "hoge", done: false},
			{id: 1, text: "hogehoge", done: false},
			{id: 2, text: "hogehogehoge", done: false}
		],
		greeting: "Hello",
		modelVueMessage: "Hello Vue!"
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
		},
		reverseGreeting() {
			store.state.greeting = store.state.greeting.split('').reverse().join('')
		},
		changeModelVueMessage(context, input) {
			store.state.modelVueMessage = input
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
		},
		getGreeting() {
			return store.state.greeting
		},
		getModelVueMessage() {
			return store.state.modelVueMessage
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
		},
		reverseGreeting() {
			store.commit("reverseGreeting")
		},
		changeModelVueMessage(context, input) {
			store.commit("changeModelVueMessage", input)
		}
	}
})

module.exports = store
