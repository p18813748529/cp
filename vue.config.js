module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.ry9906.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            },
        }
    }
}