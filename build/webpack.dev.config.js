/**
 * 本地预览
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        main: './test/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, '../test/dist'),
        publicPath: '/test/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    // 加载器
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            // { test: /\.vue$/, loader: 'vue' },
            // Module build failed: Error: The node API for `babel` has been moved to `babel-core`.
            // https://github.com/babel/babel-loader/blob/master/README.md#the-node-api-for-babel-has-been-moved-to-babel-core
            {
                test: /\.js$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
                // loader: 'style!css!less'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?sourceMap'
                ]
                // loader: 'style!css!sass?sourceMap'
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    // vue: {
    //     loaders: {
    //         css: ExtractTextPlugin.extract(
    //             "style-loader",
    //             "css-loader?sourceMap",
    //             {
    //                 publicPath: "/test/dist/"
    //             }
    //         ),
    //         less: ExtractTextPlugin.extract(
    //             'vue-style-loader',
    //             'css-loader!less-loader'
    //         ),
    //         js: 'babel'
    //     }
    // },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.vue'],
        alias: {
            iview: '../../src/index',
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
        // new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),             // 提取CSS
        // https://doc.webpack-china.org/plugins/commons-chunk-plugin/
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' })
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),                           // 提取第三方库
    ]
};
