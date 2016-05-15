var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
	entry: {
		index: ['./index.js'],
		thanks: ['./thanks.js']
	},
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
			template: 'index-html.ejs',
			excludeChunks: ['thanks'],
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			title: "Lisy &amp; Mark say thank you!",
			filename: "thanks.html",
			template: 'thanks-html.ejs',
			excludeChunks: ['index'],
			inject: 'body'
		}),
		new ExtractTextPlugin("[name].css"),
		new CommonsChunkPlugin("commons.chunk.js"),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
		  	__DEVELOPMENT___: false,
		  	__DEVTOOLS__: false,
		  	'process.env': {
		  	  'NODE_ENV': JSON.stringify('production')
		  	}
		})
	]
}