/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');
var itemsService = require('./items-service');
var itemsView = require('./items-view');

$(document).ready(function() {
	$('.title').html('partial responsibility (oh gosh, no!)');

    itemsService.fetch(function(data) {
    	itemsView.render(data.items);
    });
});
