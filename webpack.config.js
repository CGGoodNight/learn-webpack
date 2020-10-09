const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // name为引入文件的原名字，ext为原后缀, hash为随机hash值，更多可在webpack官网上查询
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 20480, // 1024字节 = 1KB,大于则使用file-loader
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } }, // 解释如下，前面只有1个loader，所以为1
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 2 } }, // 若在scss文件中引入另一个scss文件，则可能直接从css-loader走，所以添加importLoaders为2，则往下走2个loader
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
