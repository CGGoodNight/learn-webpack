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
        loader: 'file-loader',
        options: {
          // name为引入文件的原名字，ext为原后缀, hash为随机hash值，更多可在webpack官网上查询
          name: '[name]_[hash].[ext]',
          outputPath: 'images/'
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}