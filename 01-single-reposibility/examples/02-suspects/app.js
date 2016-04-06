/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');
var suspect1 = require('./many-variables');
var suspect2 = require('./many-public-methods');
var suspect3 = require('./methods-use-many-variables');
var suspect4 = require('./tasks-private-methods');

$(document).ready(function() {
	$('.title').html('suspects...');

	suspect1.init();
    suspect2.init();
    suspect3.init();
    suspect4.init();

    suspect2.getData(function(data){
    	var items = suspect2.getItems(data);
    	suspect2.render(items);
    });
});
