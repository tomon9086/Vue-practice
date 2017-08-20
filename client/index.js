const Vue = require("vue")
const helloVue = require("./hello.vue").default
// const helloVue = Vue.extend(require("../client/hello.vue"))
const hello = new Vue(helloVue).$mount("#hello")
console.log(helloVue)
// new Vue({
// 	el: '#hello',
// 	data: {
// 		message: 'Hello Vue!'
// 	}
// })
