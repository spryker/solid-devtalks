/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cwd = process.cwd();

let entryPoints = {
    test: '00-test/app.js',
    e01: '01-js-class/app.js',
    e02: '02-suspects/app.js',
    e03: '03-multi-resp/app.js',
    e04: '04-single-resp/app.js',
    e05: '05-sintial-resp/app.js',
    e06: '06-partial-resp/app.js'
};

let indexes = [{
    from: path.join(cwd, './src/style.css'),
    to: path.join(cwd, `./style.css`)
}, {
    from: path.join(cwd, './src/data.json'),
    to: path.join(cwd, `./data.json`)
}];

Object.keys(entryPoints).forEach(function(key) {
    indexes.push({
        from: path.join(cwd, './src/template.html'),
        to: path.join(cwd, `./${key}/index.html`)
    });
});

indexes.push();

let config = {
    entry: entryPoints,
    resolve: {
        root: [
            path.join(cwd, './examples'),
            path.join(cwd, './node_modules')
        ]
    },
    output: {
        path: path.join(cwd, './build'),
        filename: '[name]/example.js'
    },
    plugins: [
        new CopyWebpackPlugin(indexes)
    ],
    progress: true,
    failOnError: false,
    devtool: 'sourceMap',
    debug: true
};

module.exports = config;
