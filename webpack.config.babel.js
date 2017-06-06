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
            rules: [
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
            rules: [
                {
    				test: /\.scss$/,
    				use: ExtractTextPlugin.extract({
    		          fallback: "style-loader",
    		          use: [ "css-loader", "sass-loader"]
    		        })
                },
                { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'file-loader' },
            ]
        },
        plugins: [
            new ExtractTextPlugin("bootstrap.min.css"),
        ]
    },  {
        entry: [
            './resources/assets/sass/app.scss'
        ],
        output: {
            path: path.resolve('./public/stylesheets'),
            filename: 'app.min.css'
        },
        module: {
            rules: [
                {
    				test: /\.scss$/,
    				use: ExtractTextPlugin.extract({
    		          fallback: "style-loader",
    		          use: [ "css-loader", "sass-loader"]
    		        })
                },
                { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'file-loader' },
            ]
        },
        plugins: [
            new ExtractTextPlugin("app.min.css"),
        ]
    }
]
