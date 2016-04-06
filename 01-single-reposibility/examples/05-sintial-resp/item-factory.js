/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

function get(item) {
    return '<li class="' + (item.isImportant ? 'important' : 'ordinary') + '">' + item.name + ': ' + item.value + '</li>';
}

module.exports = {
	get: get
};
