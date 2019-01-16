const merge = require('webpack-merge');
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
//const cleanPlugin = require('clean-webpack-plugin');

const config = require('./webpack.config.base');

const proConfig = merge(config, {
    // output: {
    //     filename: 'js/[name].js',
    //     chunkFilename: 'js/[name].[chunkhash:8].js',//异步加载的模块
    //     path: path.join(__dirname, '../dist/static'),
    //     publicPath: '/static/'
    // },
    module:{
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',//通过自定义的插件和工具生态体系来重新定义css以兼容浏览器版本
                        options: {
                            sourceMap: true//使用前面sass-loader的sourceMap,编译效率更高
                        }
                    },
                    'sass-loader'
                ]
            }
        ],
    },    
    plugins: [
        new miniCssExtractPlugin({//css单独打包，使用异步加载模块时没必要提取到单独css打包
            filename: 'css/[name].[chunkhash:8].css'
        }),
        // new cleanPlugin(['dist'], {
        //     root: path.join(__dirname, '..')
        // })//实例化，参数为目录
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: true
    }
});
proConfig.output.filename = 'js/[name].[chunkhash:8].js';//hash多入口打包是hash值一样重新打包会改变，不利于缓存

module.exports = proConfig;