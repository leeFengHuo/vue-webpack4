const path = require('path');
const webpack = require('webpack');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development';
const htmlPlugin = require('html-webpack-plugin');
const createVueLoaderOptions = require('./vue-loader.config');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    //context: path.resolve(__dirname, '../'),//context是webpack编译时的基础目录，entry入口会相对于此目录查找
    target: 'web',
    entry: {
        index: resolve('src/main.js')
    },
    output: {
        filename: '[name].[hash:8].js',
        // //chunkFilename: 'js/[name].[chunkhash:8].js',//异步加载的模块
        // path: resolve('dist/static'),
        // publicPath: isDev ? '/static/' : './static/'
    },
    mode: process.env.NODE_ENV, 
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'//预执行eslint-loader
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                //options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/ ,
                use: [
                    {
                        loader: 'url-loader',//url-loader包括file-loader，可以设置1024以下大小的图片打包成base64，减少请求
                        options: {
                            limit: 1024,
                            name: 'img/[path][name].[hash:8].[ext]'//ext即图片扩展名
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin(),
        new htmlPlugin({
            template: resolve('index.html'),
            hash: true,
            filename: resolve('dist/index.html'),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'//区分开发运行环境打包版本，可在开发中区分环境
            }
        })
    ],
    resolve: {//Resolve配置webpack如何寻找模块对应的文件
        extensions: ['.js', '.vue', '.json'],//resolve.extensions用于配置在尝试过程中用到的后缀列表
        alias: {//resolve.alias配置项通过别名来把原来导入路径映射成一个新的导入路径
            'vue': resolve('node_modules/vue/dist/vue.esm.js'),
            'scss': resolve('src/styles'),
            'mixins': resolve('src/mixins'),
            'components': resolve('src/components'),
            '@': resolve('src'),
        },
        modules: [//resolve.modules配置webpack去哪些目录下寻找第三方模块
            resolve('src'),
            'node_modules'
        ],
        //enforceExtension: true//resolve.enforceExtension如果配置为true，所有导入语句都必须带文件后缀
    }
};