/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

function getClass(isImportant) {
    return isImportant ? 'important' : 'ordinary';
}

module.exports = {
	getClass: getClass
};
