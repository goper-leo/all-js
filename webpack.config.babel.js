/*
 * ./webpack.config.js
 */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
    entry: [
        './resources/assets/js/app.js',
        './resources/assets/sass/bootstrap.scss'
    ],
    output: {
        path: path.resolve('./public/'),
        filename: 'javascripts/app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"}),},
            { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])}
        ]
    },
    plugins: [
        new ExtractTextPlugin("stylesheets/[name].css"),
    ]
}
