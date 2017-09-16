module.exports = {
    entry: "./client/index.js",
    output: {
        filename: "./public/index.js"
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js",
            "vuex": "vuex/dist/vuex.js"
        }
    },
    module: {
        loaders: [
          { test: /\.vue$/, loader: "vue-loader" }
        ]
    }
}
