const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry File Directory
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './index.js',
		//	For multiple entry points to be bundled in array order:
		/*
		 	entry: {
	   	app: ['./home.js', './events.js', './vendor.js'],
			},
		*/
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		// [name] will allow multiple outputs based on multiple entries
		filename: './assets/[name].bundle.js',
		// Global namespace for functions. Will attach bundle to window.myClassName instance
			/*
			library: 'myClassName',
			*/
    },
    module: {
        rules: [
            {
				test: /\.(sass|scss)$/,
				use: [
					// ExtractTextPlugin can be used to to bundle css separately instead of style-loader
					'style-loader',
					// CSS Modules scoped to JS file or React Component
					{
						loader: 'css-loader',
						options: { modules: true }
					},
					'sass-loader'
				],
			},
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        // Automatic vendor bundling:
        /*
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons',
                filename: 'commons.js',
                minChunks: 2,
            }),
        */
    ]
};