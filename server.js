/* eslint-disable */
var isDev = (process.env.NODE_ENV !== 'production');
var webpack = require('webpack');
var express = require('express');
var path = require('path');
var app = express();

if (!isDev) {
    var static_path = path.join(__dirname);

    app.use(express.static(static_path))
        .get('/', function(req, res) {
            res.sendFile('./index.html', {
                root: static_path
            });
        }).listen(process.env.PORT || 8080, function(err) {
            if (err) {
                console.log(err)
            };
            console.log('Listening at localhost:8080');
        });
}


if (isDev) {
    var config = require('./webpack.config');
    var compiler = webpack(config);
    app.use('/static/img', express.static(__dirname + '/img'));

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }));

    app.use(require('webpack-hot-middleware')(compiler));

    app.get('*', function(req, res, next) {
        var filename = path.join(compiler.outputPath, 'index.html');
        compiler.outputFileSystem.readFile(filename, function (err, result) {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    app.listen(process.env.PORT || 9000, 'localhost', function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Listening at localhost:9000');
    });
}
