var path = require('path');

module.exports = {
  entry: {
    nodetest: './src/test.tsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  target: "node",
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /(\.css|\.less)$/,
        loader: 'null-loader',
        exclude: [
            /build/
        ]
      },
      {
        test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
        loader: 'null-loader'
      }
    ]
  }
};
