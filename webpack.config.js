const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const scripts = require('./config/scripts');
const styles = require('./config/styles');
const extractCSS = require('./config/styles.extract');
const images = require('./config/images');
const surceMap = require('./config/source.map');
const server = require('./config/server');
const extractFiles = require('./config/files.extract');

const paths = {
	source: path.join(__dirname, 'src'),
	distribution: path.join(__dirname, 'public'),
};

const main = merge([
	{
		entry: {
			'app': paths.source + '/js/app.js',
			'home': paths.source + '/js/home.js',
		},

		output: {
			path: paths.distribution,
			filename: './js/[name].[chunkhash].js'
		},

		target: 'web',

		resolve: {
			extensions: ['.js', '.json', '*']
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: paths.source + '/home.html',
				chunks: ['common', 'app', 'home'],
				favicon: paths.source + '/favicon.ico'
			}),	
		],

		// optimization: {
		// 	splitChunks: {
		// 	  cacheGroups: {
		// 		'common': {
		// 		  chunks: 'initial',
		// 		  name: 'common',
		// 		  enforce: true,
		// 		},
		// 	  },
		// 	},
		//   },
		optimization: {
			splitChunks: {
				chunks: 'async',
				name: true,
			},
		},
	},

	scripts(),
	images(),
	surceMap(),
	extractFiles()
]);

module.exports = function(env, argv) {
	if (argv.mode === 'production') {
		return merge([main, extractCSS()]);
	}
	if (argv.mode === 'development') {
		return merge([main, server(), styles()]);
	}
};
