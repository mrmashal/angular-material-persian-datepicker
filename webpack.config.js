const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        datePicker: [
            './src/datePicker.js',
            './src/js/calendar.js',
            './src/js/calendarMonth.js',
            './src/js/calendarMonthBody.js',
            './src/js/calendarYear.js',
            './src/js/calendarYearBody.js',
            './src/js/dateLocaleProvider.js',
            './src/js/datepickerDirective.js',
            './src/js/dateUtil.js',
            './src/datePicker.css'
        ]
    },
    devtool: 'source-map',
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['ng-annotate-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]
}