// tsだとproxyが効かない為、jsにする
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
      // swagger mock server
      /* '/api': {
        target: 'http://localhost:3200',
        https: false
      } */
      // backend server
      '/api': {
        target: 'http://localhost/',
        https: false,
      },
    },
  },
}
