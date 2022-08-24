const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../../dist'),
		filename: 'index.bundle.js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/',
	},

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".scss"],
	},

	devServer: {
		port: 3000,
		historyApiFallback: true,
		hot: true
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /nodeModules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(jpe?g|png|gif|svg|pdf)$/i,
				loader: 'file-loader',
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' }),
		new MiniCssExtractPlugin()
	]
}