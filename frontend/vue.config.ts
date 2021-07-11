module.exports = {
  publicPath: '/',
  // ポートなどの設定
  devServer: {
    port: 8080,
    proxy: {
      // mock server
      /* '/api': {
        target: 'http://localhost:8000/api',
        https: false
      } */
      // development
      /* '/api': {
        target: 'http://localhost:50180/',
        https: false
      } */
      '/api': {
        target: 'http://localhost/',
        https: false,
      },
    },
  },
}
