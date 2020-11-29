const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const pkg = require('./package.json')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = (env = {}, argv) => {
  return {
    target: 'node',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.graphql$/i,
          use: 'raw-loader',
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEBUG__: JSON.stringify(!!env.debug),
        __DEV__: JSON.stringify(argv.mode === 'development'),
        __VERSION__: JSON.stringify(pkg.version),
      }),
      new WebpackBar({ profile: true }),
      new NodemonPlugin({
        ignore: ['src', 'node_modules'],
      }),
    ],
  }
}
