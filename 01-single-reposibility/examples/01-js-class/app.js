/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

require('./class');
var Car = require('./module');

var civic = new Car('Honda Civic', 2009, 20000, 170);
var mondeo = new Car('Ford Mondeo', 2010, 5000, 150);

// Car.prototype.toString = function(){
// 	return 'This car sucks, give me a Ferrari!';
// };

console.log(civic.toString());
console.log(mondeo.toString());
