/**
 * Created by Zoho on 16/8/27.
 */
const debug = process.env.NODE_ENV !== "production";
console.log(`=> Debug mode: ${debug ? 'on' : 'off'}.`);

const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        'app': './js/app.js'
    },
    module: {
        rules: [
            // LESS file loaders
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'css')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    // {
                    //     loader: 'postcss-loader'
                    // },
                    {
                        loader: 'less-loader'
                    }
                ]
            },

            // File loader
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'index.html'
                        }
                    }
                ]
            },
            // JavaScript files
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'stage-0'],
                            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/docs'),
        compress: true,
        port: 8080
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: "[name].min.js"
    },
    plugins: []
    // plugins: debug ? [
    //     // Clean distribution folder
    //     new CleanWebpackPlugin(['docs'], {
    //         root: path.resolve('.'),
    //         verbose: true
    //     })
    // ] : [
    //     new webpack.optimize.DedupePlugin(),
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    //     // Clean distribution folder
    //     new CleanWebpackPlugin(['docs'], {
    //         root: path.resolve('.'),
    //         verbose: true
    //     })
    // ]
};
