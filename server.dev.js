const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const app = express();
const port = process.env.PORT || 3000
app.set('port', port)

console.log('running in development mode')
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
	publicPath: config.output.publicPath,
	contentBase: 'src',
	stats: {
		colors: true,
		hash: true,
		timings: true,
		chunks: true,
		chunkModules: true,
		modules: true
	}
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('/', function response(req, res) {
	res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
	res.end();
});

app.get('/thankyou', function response(req, res) {
	res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/thanks.html')));
	res.end();
});

app.listen(app.get('port'), '0.0.0.0', function(err) {
	if (err) {
		console.log(err);
	}
	console.log('express server started & listening on port', app.get('port'))
})