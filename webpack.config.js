var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./index.js'
	],
	devtool: 'eval-source-map',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
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
			{ test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' }
		,
			{ test: /\.(png|jpg|gif)$/, loader: 'img' }
		]	
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Lisy &amp; Mark are getting married!",
			template: 'index-html.ejs',
			inject: 'body'
		}),
		new ExtractTextPlugin("index.css"),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
		  	__DEVELOPMENT___: true,
		  	__DEVTOOLS__: true
		})
	]
}