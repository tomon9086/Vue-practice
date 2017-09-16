// require("source-map-support").install()
const Vue = require("vue")
const Vuex = require("vuex")
const mainVue = require("./main.vue").default
// const mainVue = Vue.extend(require("../client/main.vue"))
const main = new Vue(mainVue).$mount("#vue")
// console.log(mainVue)
// new Vue({
// 	el: '#main',
// 	data: {
// 		message: 'main Vue!'
// 	}
// })
