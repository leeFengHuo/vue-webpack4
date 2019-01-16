const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, '../dist/static/js/index.js')//由于build命令打包的入口文件使用了chunkhash，这个入口文件找不到
    },
    output: {
        path: path.join(__dirname, '../dist/static'),
        publicPath: '/static/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist/'),
        host:'0.0.0.0',
        proxy: {
            
        }
    }    
};

module.exports.devtool = 'source-map';