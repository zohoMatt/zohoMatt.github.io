/**
 * Created by Zoho on 16/8/27.
 */
var debug = process.env.NODE_ENV !== "production";
console.log(debug);
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        'app': './js/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test:/\.less$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style!css!less'
            },
            {
                test: /\.(eot|woff|woff2|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.(svg|ttf)/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        path: __dirname + "/bundle",
        filename: "[name].min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    external: {
        "jquery": "jQuery"
    }
};
