/**
 * Created by Zoho on 16/8/27.
 */
/* eslint no-console: "off" */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const ccolor = require('colors');

const debug = process.env.NODE_ENV !== 'production';
console.log(`=> Development mode: ${debug ? 'on' : 'off'}.`.blue);

/** ======================================================* */
/**                   Configuration                      * */
/** ======================================================* */
module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-source-map' : '',
  entry: {
    app: './src/app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    alias: {
      assets: path.resolve(__dirname, 'src/components/assets'),
      components: path.resolve(__dirname, 'src/components'),
      css: path.resolve(__dirname, 'css'),
      src: path.resolve(__dirname, 'src'),
      lib: path.resolve(__dirname, 'src/lib'),
      actions: path.resolve(__dirname, 'src/model/actions'),
      store: path.resolve(__dirname, 'src/model/store'),
    },
  },
  module: {
    rules: [
      // LESS file loaders
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'css'),
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          // {
          //     loader: 'postcss-loader'
          // },
          {
            loader: 'less-loader',
          },
        ],
      },

      // File loader
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(htm|html)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index.html',
            },
          },
        ],
      },
      // JavaScript files
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              plugins: [
                'react-html-attrs',
                'transform-class-properties',
                'transform-decorators-legacy'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '/docs'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].min.js',
  },
  plugins: [
    // Delete certain folders/files
    new CleanWebpackPlugin(['docs']),

    // Create a html using the bundle file
    new HtmlWebpackPlugin({
      title: 'Zoho Code Lab',
      favicon: path.resolve(__dirname, 'img/favico.png'),
    }),

    // Uglify js to optimize the size
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: debug,
    }),

    // Prevent duplication. Allows us to extract common dependencies into a new chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),

    // Prevent repeatedly import sth.
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
