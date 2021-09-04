const path = require('path'); // Node.js модуль для разрешения путей файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    target: 'web',
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    devServer: {
        port: 8080,
        contentBase: './',
        watchContentBase: true,
        publicPath: '/dist/',
        clientLogLevel: "silent",
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(png|jpg|gif|ttf|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'img/',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),

        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/img", to: "img" },
        //     ],
        // }),
    ],

};