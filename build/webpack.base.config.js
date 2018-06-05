/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    // 加载器
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            /**
             * Extract sourceMappingURL comments from modules and offer it to webpack
             * @see {@link https://github.com/webpack-contrib/source-map-loader}
             */
            {
                enforce: 'pre',
                loader: 'source-map-loader',
                test: /\.js$/,
            },
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                        less: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                    },
                    postLoaders: {
                        html: 'babel-loader?sourceMap'
                    },
                    sourceMap: true,
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: '\'autoprefixer-loader\'',
                    },
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        /**
         * In the past, one of webpack’s trade-offs when bundling was that each module in your bundle would
         * be wrapped in individual function closures. These wrapper functions made it slower for your JavaScript
         * to execute in the browser. In comparison, tools like Closure Compiler and RollupJS ‘hoist’ or
         * concatenate the scope of all your modules into one closure and allow for your code to have a
         * faster execution time in the browser.
         * This plugin will enable the same concatenation behavior in webpack.
         * @type {!Object}
         * @see {@link https://webpack.js.org/plugins/module-concatenation-plugin/}
         */
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.VERSION': `'${pkg.version}'`
        }),
        /**
         * Visualize size of webpack output files with an interactive zoomable treemap..
         * @type {!Object}
         * @see {@link https://github.com/webpack-contrib/webpack-bundle-analyzer}
         */
        ...(process.env.REPORT ? [new BundleAnalyzerPlugin()] : []),
    ],
    /**
     * These options allows you to control how webpack notifies you of assets and
     * entrypoints that exceed a specific file limit.
     * @type {!Object}
     * @see {@link https://webpack.js.org/configuration/performance/}
     */
    performance: {
        hints: false,
    },
};
