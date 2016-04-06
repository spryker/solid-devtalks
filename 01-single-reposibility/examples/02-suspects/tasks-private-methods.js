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

function getData(callback) {
    $.get('/data.json', callback);
}

function getTemplate(item) {
    var template = _.template('<li class="<%= css %>"><%= name %>: <%= value %> at <%= time %></li>');

    return template({
        css: item.isImportant ? 'important' : 'ordinary',
        name: item.name,
        value: item.value,
        time: moment().format('mm.ss')
    });
}

function getItems(data) {
    return R.map(function(item) {
        return getTemplate(item);
    }, data.items);
}

function init() {
    getData(function(data){
    	var items = getItems(data);
    	$('.items').append(items);
    });
}

module.exports = {
    init: init
};
