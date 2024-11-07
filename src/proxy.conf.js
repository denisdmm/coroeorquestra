const PROXY_CONFIG = [
  {
    context: [
      '/api',
      '/auth/login'
    ],
    target: "https://zoeahava-api.onrender.com",
    // target: "http://localhost:3000",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  }

]
module.exports = PROXY_CONFIG;
