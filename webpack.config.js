var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
	entry: {
		index: [
			'webpack-hot-middleware/client?reload=true',
			'./index.js'
		],
		thanks: [
			'webpack-hot-middleware/client?reload=true',
			'./thanks.js'
		]
	}
,
	devtool: 'eval-source-map',
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				 test: /\.js$/
				,loader: 'babel-loader'
				,exclude: /node_modules/
			}
		,
			{
			     test: /\.less$/
			    ,loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			    ,exclude: /node_modules/
			}
		,
			{ test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=8192' }
		,
			{ test: /\.(png|jpg|gif|svg)$/, loader: 'img' }
		]	
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Lisy &amp; Mark are getting married!",
			filename: "index.html",
			favicon: './assets/favicon.png',
			template: 'index-html.ejs',
			excludeChunks: ['thanks'],
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			title: "Lisy &amp; Mark say thank you!",
			filename: "thanks.html",
			favicon: './assests/favicon.png',
			template: 'thanks-html.ejs',
			excludeChunks: ['index'],
			inject: 'body'
		}),
		new CommonsChunkPlugin("commons.chunk.js"),
		new ExtractTextPlugin("[name].css"),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
		  	__DEVELOPMENT__: true,
		  	__DEVTOOLS__: true
		})
	]
}