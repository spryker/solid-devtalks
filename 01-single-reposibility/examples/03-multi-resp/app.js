/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');
var items = require('./items');

$(document).ready(function() {
	$('.title').html('multi responsibility (wrong)');

    items.fetch(function(data) {
    	items.render(data.items);
    });
});
