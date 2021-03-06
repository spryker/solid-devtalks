/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var $ = require('jquery');

function render(items) {
    $('.items').html(items.map(function(item) {
        return '<li class="' + (item.isImportant ? 'important' : 'ordinary') + '">' + item.name + ': ' + item.value + '</li>';
    }));
}

module.exports = {
	render: render
};
