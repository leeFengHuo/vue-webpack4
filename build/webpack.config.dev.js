const merge = require('webpack-merge');
const webpack = require('webpack');

const config = require('./webpack.config.base');

module.exports = merge(config, {
    module:{
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
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
    devtool: '#cheap-module-eval-source-map', //相对source-map（完整）更小，效率更高，官方推荐
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        proxy: {},
        overlay: {//任务错误显示在网页
            error: true,
        },
        //open: true,//自动打开浏览器
        // historyFallback: {//webpack不理解的路由地址映射到入口

        // },
        hot: true//热更新，只更新修改的组件
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热更新
        //new webpack.NoEmitOnErrorsPlugin()//在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段,webpack4以去掉
    ]
});