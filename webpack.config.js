var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/js/app.js',
    output: {
      path: __dirname + '/www/js',
      publicPath: '/www/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules|bower_components/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /bower_components(\/|\\)(PreloadJS|SoundJS|EaselJS|TweenJS)(\/|\\).*\.js$/,
          loader: 'imports?this=>window!exports?window.createjs'
        }
      ]
    },
    plugins: [
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
      )
    ],
    resolve: {
      modulesDirectories: ['node_modules', 'bower_components']
    }
}
