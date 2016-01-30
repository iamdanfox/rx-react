var path = require('path');

module.exports = {
  entry: {
    index: './index.tsx',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.coffee']
  },
  module: {
    loaders: [{
      test: /\.tsx$/,
      loaders: ['ts-loader'],
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  devtool: 'cheap-eval-sourcemap'
};
