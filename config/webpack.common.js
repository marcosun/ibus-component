const paths = require('./paths');
// Clean dist folder
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Prevents users from importing files from outside of src/
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  entry: [
    paths.appIndexJs, // App entry
  ],

  output: {
    filename: 'ibusComponent.js',
    path: paths.appDist,
    library: 'ibusComponent',
    libraryTarget: 'umd',
  },

  devtool: 'source-map',

  module: {
    rules: [
      { // Javascript
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    // Prevents users from importing files from outside of src/
    new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),

    // Clean dist folder
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: paths.appPath,
        verbose: true,
      }
    ),
  ],

  resolve: {
    alias: {
      Util: paths.utilPath,
    },
  },
};
