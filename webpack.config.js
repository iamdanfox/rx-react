var path = require('path');

module.exports = [{
    entry: {
      index: './src/index.tsx'
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js'
    },
    module: {
      loaders: [{
        test: /\.tsx$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/,
        include: __dirname
      }]
    }
  }, {
    entry: {
      test: 'mocha!./src/test.tsx'
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js'
    },
    module: {
      loaders: [{
        test: /\.tsx$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/,
        include: __dirname
      }]
    }
  }
];
