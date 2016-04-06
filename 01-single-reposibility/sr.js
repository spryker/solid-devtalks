/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

require('colors');

const path = require('path');
const http = require('http');
const ecstatic = require('ecstatic');
const argv = require('minimist')(process.argv.slice(2));
const webpack = require('webpack');
const pkg = require('./package.json');

let webpackConfig = require('./webpack.config');
let server = null;

console.log(pkg.name.bold, `(v${pkg.version})`);
console.log('- building assets...'.cyan);

if (argv.serve) {
    webpackConfig.watch = true;
}

webpack(webpackConfig, (err, stats) => {
    if (err) {
        return console.error('- webpack error: %s'.red, err);
    }

    if (!!stats.compilation.errors && stats.compilation.errors.length > 0) {
        return stats.compilation.errors.forEach((compilationErr) => {
            console.error('- build error: %s'.red, compilationErr);
        });
    }

    if (!!stats.compilation.missingDependencies && stats.compilation.missingDependencies.length > 0) {
        console.warn('- missing dependencies:'.yellow);
        stats.compilation.missingDependencies.forEach((file) => {
            console.warn(`  - ${path.relative(cwd, file)}`.yellow);
        });
    }

    console.log('- build completed'.green);

    if (argv.serve && !server) {
        console.log('- watching assets for changes...'.cyan);

        server = http.createServer(ecstatic({
            root: path.join(__dirname, './build'),
            showDir: true,
            autoIndex: true
        }));

        server.listen(pkg.devServer.port, () => {
            console.log(`- server running on http://localhost:${pkg.devServer.port}...`.magenta, '[CTRL + C to exit]'.gray);
        });
    }
});
