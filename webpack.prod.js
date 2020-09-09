const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    
    output : {
        filename : "index.[contentHash].bundle.js",
        path : path.resolve(__dirname, "dist")        
    },
    mode : "production",
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]

});