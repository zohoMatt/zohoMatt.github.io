/**
 * Created by Zoho on 16/8/27.
 */
const debug = process.env.NODE_ENV !== "production";
console.log(`=> Debug mode: ${debug ? 'on' : 'off'}.`);

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

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
                test: /\.(png|jpg|svg)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader?limit=30&name=./img/img-[hash:6].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader?limit=30&name=./font/font-[hash:6].[ext]'
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style!css!autoprefixer-loader?{browsers:[">1%", "last 2 version", "Firefox 15"]}!less'
            },
            {
                test: /index\.html$/,
                loader: 'file-loader?name=index.html'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: "[name].min.js"
    },
    plugins: debug ? [
        // Clean distribution folder
        new CleanWebpackPlugin(['docs'], {
            root: path.resolve('.'),
            verbose: true
        })
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        // Clean distribution folder
        new CleanWebpackPlugin(['docs'], {
            root: path.resolve('.'),
            verbose: true
        })
    ],
    external: {
    }
};
