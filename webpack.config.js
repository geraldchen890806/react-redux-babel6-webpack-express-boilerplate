/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './js/index'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        })
    ],
    resolve: {
        alias: {
            'business': process.cwd(),
            'js': path.resolve('js'),
            'core': path.resolve('js/core'),
            'apps': path.resolve('js/apps')
                // 'redux': path.join(__dirname, 'node_modules/redux')
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: path.join(__dirname, 'js')
        }, {
            test: /\.css$/,
            loaders: ['style', 'raw'],
            include: __dirname
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less'],
            include: __dirname
        }, {
            test: /\.(jpeg|png|jpg|gif|pdf)$/,
            loader: 'file?name=[path][name].[ext]'
        }, {
            test: /\.woff|\.woff2$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.(tpl|html)$/,
            loader: 'ejs'
        }, {
            test: /\.eot$/,
            loader: "file"
        }, {
            test: /\.svg$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    }
};
