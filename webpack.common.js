const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");

module.exports = {
    entry : "./src/scripts/index.js",
    module : {
        rules : [
            {
                test :/\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin(
            {
                template : "./src/index.html"
            }
        ),
    ]

}