const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(png|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // name为引入文件的原名字，ext为原后缀, hash为随机hash值，更多可在webpack官网上查询
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 20480 // 1024字节 = 1KB,大于则使用file-loader
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}