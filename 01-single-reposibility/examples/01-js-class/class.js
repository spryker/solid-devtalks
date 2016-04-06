/**
 *
 * SOLID priciples devtalk: single responsibility
 * @author: Alessandro Bellini <alessandro.bellini@spryker.com>
 *
 */

'use strict';

/*

The Constructor Pattern

In classical object-oriented programming languages, a constructor is 
a special method used to initialize a newly created object once memory 
has been allocated for it. In JavaScript, as almost everything is an object, 
we're most often interested in object constructors.

Object constructors are used to create specific types of objects - both 
preparing the object for use and accepting arguments which a constructor 
can use to set the values of member properties and methods when the object 
is first created.

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

var civic = new Car('Honda Civic', 2009, 20000, 170);
var mondeo = new Car('Ford Mondeo', 2010, 5000, 150);

Car.prototype.toString = function(){
	return 'This car sucks, give me a Ferrari!';
};

console.log(civic.toString());
console.log(mondeo.toString());
