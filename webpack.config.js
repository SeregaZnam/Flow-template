const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   context: path.resolve(__dirname, 'app'),
   mode: 'development',
   entry: {
      main: './index.js'
   },
   resolve: {
      extensions: ['.js'],
      alias: {
         '@tools': path.resolve(__dirname, 'app/tools')
      }
   },
   devServer: {
      port: 4200
   },
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './index.html'
      }),
      new CleanWebpackPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         }
      ]
   }
};
