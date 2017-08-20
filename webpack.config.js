// const path = require("path")

module.exports = {
    entry: "./client/index.js",
    output: {
        // path: path.resolve(__dirname, "public"),
        // filename: "index.js"
        filename: "./public/index.js"
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.common.js"
            "vue$": "vue/dist/vue.js"
        },
        // extensions: [".vue"]
    },
    module: {
        loaders: [
          { test: /\.vue$/, loader: "vue-loader" },
        ]
    }
}
/*
module.exports = [{
    entry: "./src/client/room/room.js",
    output: {
        filename: "./lib-client/room.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions: [".vue", ".js"]
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: "vue-loader"
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                // make sure to exclude 3rd party code in node_modules
                exclude: /node_modules/
            }

        ]
    }
}]
*/