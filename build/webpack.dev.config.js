/**
 * 本地预览
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    mode: process.env.NODE_ENV,
    // 入口
    entry: {
        main: './examples/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            iview: '../../src/index',
            vue: 'vue/dist/vue.esm.js'
            // vue: 'vue/dist/vue.runtime.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
});
