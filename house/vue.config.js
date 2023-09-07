module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://sourcebyte.cn',
		target: 'http://127.0.0.0:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}