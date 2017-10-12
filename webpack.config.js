const webpack = require("webpack")

module.exports = {
	entry: {
		app: [
			// "webpack-dev-server/client?http://localhost:3001",
			// "webpack/hot/dev-server",
			"./client/index.js"
		]
	},
	output: {
		filename: "./public/vue-practice/index.js",
		publicPath: "/public/"
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
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin()
	]
}
