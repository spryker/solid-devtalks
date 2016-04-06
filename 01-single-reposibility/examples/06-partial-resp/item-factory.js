/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

var itemImportanceDefiner = require('./item-importance-definer');

function get(item) {
    return '<li class="' + itemImportanceDefiner.getClass(item.isImportant) + '">' + item.name + ': ' + item.value + '</li>';
}

module.exports = {
	get: get
};
