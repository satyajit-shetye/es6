// responsibe for build
var config = {
    entry: "./index.js",
    output: {
        path: "/",
        filename: "build.js" // build file
    },
    devServer: {
        port: 7000
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    // use in case of es2015 Module only
                    presets: ["es2015"]
                    // use in case of react
                    // presets: ["es2015","react"]
                }
            }
        ]
    }
};
module.exports = config;