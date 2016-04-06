/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

function manage(callback) {
    return function(data){
    	console.info('Ground control to Major Tom: we have callback in here...', data);
    	callback(data);
    }
}

module.exports = {
	manage: manage
};
