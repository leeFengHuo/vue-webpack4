let docLoader = require.resolve('./doc-loader.js');
module.exports = (isDev) => {
    return {
        preserveWhitepace: true,//消除文本后面的空格
        extractCSS: !isDev,//vue组件内的css打包到单独文件
        cssModules: {//在style加上module属性
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',//生成的class命名格式
            camelCase: true//把有-的样式命名转换成驼峰命名
        },
        // hotReload: false, // 根据环境变量生成，默认情况下是在production的情况下关闭热重载，不必设置
        loaders: {
            'docs': docLoader,
            js: 'coffe-loader'//指定了loader会根据相应的loader去解析它
        },//自定义模块，
        preLoader: {//先解析哪一种loader
            //...
        },
        psotLoader: {//后解析哪种loader
            //...
        }
    };
};