/**
 * Created by Zoho on 16/8/27.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const ccolor = require('colors');

const debug = process.env.NODE_ENV !== "production";
console.log(`=> Development mode: ${debug ? 'on' : 'off'}.`.blue);

/**======================================================**/
/**                   Configuration                      **/
/**======================================================**/
module.exports = {
    context: __dirname,
    devtool: debug ? "inline-source-map" : "",
    entry: {
        'app': './js/app.js'
    },
  resolve: {
      alias: {
        JS: path.resolve(__dirname, 'js'),
        CSS: path.resolve(__dirname, 'css')
      }
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
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: "[name].min.js"
    },
    plugins:[
      new CleanWebpackPlugin(['docs']),
      new HtmlWebpackPlugin({
        title: 'Zoho Code Lab',
        favicon: path.resolve(__dirname, 'img/favico.png')
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: debug
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'app'
      })
    ]
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
