const copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = function() {
	return {
		module: {
			rules: [
				// {
				// 	test: /\.(woff'|woff2'|eot'|ttf'|otf|svg)$/,
				// 	use: [
				// 		{
				// 			loader: 'file-loader',
				// 			options: {
				// 				name: '[name].[ext]',
				// 				outputPath: 'fonts/'
				// 			}
				// 		}
				// 	]
				// },
				{
					test: /\.(ico)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: './favicon.ico'
							}
						}
					]
				}
			]
		},

		plugins: [
			new copyWebpackPlugin([
				{
					from: 'src/fonts',
					to: 'fonts/'
				}
			])
		]
	};
};
