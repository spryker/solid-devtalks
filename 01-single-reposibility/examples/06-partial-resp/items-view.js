/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');
var itemFactory = require('./item-factory');

function render(items) {
    $('.items').html(items.map(function(item) {
        return itemFactory.get(item);
    }));
}

module.exports = {
	render: render
};
