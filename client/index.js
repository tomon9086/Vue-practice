const Vue = require("vue")
const mainVue = require("./main.vue").default
const main = new Vue(mainVue).$mount("#vue")
