const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist"
	},
	plugins: [
		new CleanWebpackPlugin(["dist/*"]),
		new HtmlWebpackPlugin({
			title: "Output Management",
			template: "index.html"
		})
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2|ttf|eot)$/,
				use: ["file-loader"]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	}
};
