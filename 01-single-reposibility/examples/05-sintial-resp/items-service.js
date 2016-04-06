/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');

function fetch(callback) {
    $.get('/data.json', callback);
}

module.exports = {
	fetch: fetch
};
