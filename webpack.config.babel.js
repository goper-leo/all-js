/*
 * ./webpack.config.js
 */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = [
    {
        entry: [
            './resources/assets/js/app.js',
        ],
        output: {
            path: path.resolve('./public/'),
            filename: 'javascripts/app.js'
        },
        module: {
            loaders: [
                { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
                { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            ]
        },
    }, {
        entry: [
            './resources/assets/sass/bootstrap.scss'
        ],
        output: {
            path: path.resolve('./public/stylesheets/bootstrap'),
            filename: 'bootstrap.min.css'
        },
        module: {
            loaders: [
                { test: /\.(scss)$/, loader: 'css-loader!sass-loader!sass-loader?sourceMap'},
                { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'file-loader' },
            ]
        },
        plugins: [
            new ExtractTextPlugin("stylesheets/bootstrap/bootstrap.css"),
        ]
    }
]
