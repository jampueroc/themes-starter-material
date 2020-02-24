const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	context: path.resolve( __dirname, 'assets' ),
	entry: {
		main: [ './main.js' ],
	},
	output: {
		path: path.resolve( __dirname, 'assets/js' ),
		filename: '[name].bundle.js',
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin( {
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		} ),
		require('autoprefixer')
	],
	devtool: 'source-map',
	watch: true,
	module: {
	rules: [
			{
				test: /\.scss$/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					{
					  loader: 'sass-loader',
					  options: {
					    // Prefer Dart Sass
					    implementation: require('sass'),
					    sassOptions: {
              resources: [ path.resolve( __dirname, 'node_modules/**/*.scss' ),
							path.resolve( __dirname, 'assets/**/scss')
						],
					      includePaths: [path.resolve( __dirname, 'node_modules' ),
									path.resolve( __dirname, 'node_modules/material-components-web/node_modules' ),
										path.resolve( __dirname, 'node_modules/@material/*' ),
										path.resolve( __dirname, 'assets'),
								]
					    },
					  }
					}
				],
			},
		],
	},
	optimization: {
     splitChunks: {
       chunks: 'all',
     }
   }
};
