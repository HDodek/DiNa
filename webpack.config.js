'use strict';

module.exports = {
  entry: './client/app.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
     {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      },
    },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test:   /\.png$/,
        loader: 'url-loader',
      },
     ]
  }
};