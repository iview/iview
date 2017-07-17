var path = require('path');
var webpack = require('webpack');

process.env.NODE_ENV = 'production';

module.exports = {
    entry: {
        'de-DE': './src/locale/lang/de-DE.js',
        'en-US': './src/locale/lang/en-US.js',
        'es-ES': './src/locale/lang/de-DE.js',
        'fr-FR': './src/locale/lang/zh-CN.js',
        'ja-JP': './src/locale/lang/zh-CN.js',
        'pt-BR': './src/locale/lang/zh-CN.js',
        'ru-RU': './src/locale/lang/zh-CN.js',
        'tr-TR': './src/locale/lang/tr-TR.js',
        'zh-CN': './src/locale/lang/zh-CN.js',
        'zh-TW': './src/locale/lang/zh-TW.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist/locale'),
        publicPath: '/dist/locale/',
        filename: '[name].js',
        library: 'iview/locale',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}