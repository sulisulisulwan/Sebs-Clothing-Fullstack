module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    path: __dirname + '/frontend/src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/frontend/public'
  }
}