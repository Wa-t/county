const {createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/bang', 
        createProxyMiddleware({
        target: 'https://www.clgnews.com',
        changeOrigin: true,
        })
    )
}