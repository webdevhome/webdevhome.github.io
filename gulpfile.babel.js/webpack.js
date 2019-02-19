export function getWebpackConfig (production = false) {
  return {
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    },
    output: { filename: 'index.js' },
    watch: production ? false : true,
    mode: production ? 'production' : 'development'
  }
}