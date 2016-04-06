/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

/*

CoomonJS

From a structure perspective, a CommonJS module is a reusable piece of JavaScript 
which exports specific objects made available to any dependent code. Unlike AMD, 
there are typically no function wrappers around such modules (so we won't see define 
here for example).

CommonJS modules basically contain two primary parts: a free variable named exports 
which contains the objects a module wishes to make available to other modules and a 
require function that modules can use to import the exports of other modules.

*/

function Car(model, year, miles, maxSpeed) {
	var _maxSpeed = maxSpeed;

    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles'; // + maxSpeed;
};

module.exports = Car;
