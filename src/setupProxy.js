const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/bang',
        createProxyMiddleware({
            target: 'https://api.clgnews.com',
            changeOrigin: true,
        })
    )
}