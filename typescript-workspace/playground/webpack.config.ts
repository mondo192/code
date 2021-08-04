import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const config: Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ["babel-loader", "ts-loader"]
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./",
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./templates/index.html"
    })
  ],
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}

export default config;