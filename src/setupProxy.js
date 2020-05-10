const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
<<<<<<< HEAD
  app.use('/bang',
    createProxyMiddleware({
      target: 'https://www.clgnews.com',
      changeOrigin: true,
    })
  )
=======
    app.use('/bang',
        createProxyMiddleware({
            target: 'https://www.clgnews.com',
            changeOrigin: true,
        })
    )
>>>>>>> 7f2d06f4cd32f27da17fe08754881da436570007
}