/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var R = require('ramda');
var moment = require('moment');

function init() {
	var template = _.template('<li class="<%= css %>"><%= name %>: <%= value %> at <%= time %></li>');

	$.get('/data.json', function(data){
		var items = R.map(function(item){
			return template({
				css: item.isImportant ? 'important' : 'ordinary',
				name: item.name,
				value: item.value,
				time: moment().format('mm.ss')
			});
		}, data.items);

		$('.items').append(items);
	});
}

module.exports = {
	init: init
};
