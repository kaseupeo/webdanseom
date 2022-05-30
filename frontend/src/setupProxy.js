const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://210.183.24.244:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // URL ^/api -> 공백 변경
      },
    }),
  );
};
