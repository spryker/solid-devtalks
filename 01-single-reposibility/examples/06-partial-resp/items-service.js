/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');
var itemsServiceCallback = require('./items-service-callback');

function fetch(callback) {
    $.get('/data.json', itemsServiceCallback.manage(callback));
}

module.exports = {
	fetch: fetch
};
