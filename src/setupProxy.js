// @ts-ignore 
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy.createProxyMiddleware('/api', { 
       target: 'https://c.y.qq.com' ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       }
    }));
  app.use(proxy.createProxyMiddleware('/local', { 
       target: 'http://localhost:8000' ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/local": "/"
       }
    }));
};