const path = require( 'path' );
const webpack = require( 'webpack' );
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	context: path.resolve( __dirname, 'assets' ),
	entry: {
		main: [ './main.js', './style.scss'],
	},
	output: {
		path: path.resolve( __dirname, 'assets/js' ),
		filename: '[name].bundle.js',
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
  new MiniCssExtractPlugin({
    filename: "[name].css"
  }),
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
          {
            loader: "file-loader",
            options: {
              name: "[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader?-url"
          },{
					  loader: 'postcss-loader',
					  options: {
					    plugins: () => [require('autoprefixer')]
					  }
					},
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
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        }
      })
    ],
   }
};
