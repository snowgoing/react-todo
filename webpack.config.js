var path = require('path');
var webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    // This LoaderOptionsPlugin doesn't work at all
    // leaving it in for reference
    // manually followed paths into node_modules in _foundation-settings.scss
    // and app.scss
    new webpack.LoaderOptionsPlugin({
      options: {
          // context: '/',
          sassLoader: {
              includePaths: [
                  path.resolve(__dirname, './node_modules/foundation-sites/scss')
              ]
          }
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // modulesDirectories no longer supported
    // modulesDirectories: [
    //   'node_modules',
    //   './app/components'
    // ],
    alias: {
      app: path.resolve('app'),
      TodoApp: path.resolve('app/components/TodoApp.jsx'),
      TodoList: path.resolve('app/components/TodoList.jsx'),
      TodoSearch: path.resolve('app/components/TodoSearch.jsx'),
      Todo: path.resolve('app/components/Todo.jsx'),
      TodoAPI: path.resolve('app/api/TodoAPI.jsx'),
      AddTodo: path.resolve('app/components/AddTodo.jsx'),
      actions: path.resolve('app/actions/actions.jsx'),
      reducers: path.resolve('app/reducers/reducers.jsx'),
      configureStore: path.resolve('app/store/configureStore.jsx'),
      applicationStyles: path.resolve('app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map'
};
