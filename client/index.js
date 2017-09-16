// require("source-map-support").install()
const Vue = require("vue")
const Vuex = require("vuex")
const rootVue = require("./root.vue").default
// const rootVue = Vue.extend(require("../client/root.vue"))
const root = new Vue(rootVue).$mount("#vue")
// console.log(rootVue)
// new Vue({
// 	el: '#main',
// 	data: {
// 		message: 'main Vue!'
// 	}
// })
