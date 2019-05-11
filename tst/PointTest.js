'use strict';

const assert = require('assert');
const Point = require('../src/Point.js');

function testConstructorNonNumberX() {
	invalidConstructorArgsSharedBehavior("10", 10);
}

function testConstructorNaNX() {
	invalidConstructorArgsSharedBehavior(NaN, 10);
}
	
function testConstructorNonNumberY() {
	invalidConstructorArgsSharedBehavior(10, "10");
}

function testConstructorNaNY() {
	invalidConstructorArgsSharedBehavior(10, NaN);
}

function testXImmutability() {
	immutabilitySharedBehavior('x');
}

function testYImmutability() {
	immutabilitySharedBehavior('y');
}

function testEqualityEqual() {
	let p1 = new Point(10, 10);
	let p2 = new Point(10, 10);

	assert(p1.equals(p2));
}

function testEqualityXNotEqual() {
	let p1 = new Point(9, 10);
	let p2 = new Point(10, 10);

	assert(!p1.equals(p2));	
}

function testEqualityYNotEqual() {
	let p1 = new Point(10, 9);
	let p2 = new Point(10, 10);

	assert(!p1.equals(p2));
}

function testConstructor() {
	let p = new Point(10, 10);

	assert.strictEqual(10, p.x);
	assert.strictEqual(10, p.y);
}

function immutabilitySharedBehavior(fieldName) {
	let p = new Point(9, 10);

	let exception;
	try {	
		p[fieldName] = 0;
	} catch (e) {
		exception = e;
	}

	assert.strictEqual("TypeError", exception.name);	
}

function invalidConstructorArgsSharedBehavior(xParam, yParam) {
	let exception;

	try {
		new Point(xParam, yParam);	
	} catch(e) {
		exception = e;
	}

	assert.strictEqual("TypeError", exception.name);	
}

testConstructor();
testConstructorNonNumberX();
testConstructorNaNX();
testConstructorNonNumberY();
testConstructorNaNY();
testXImmutability();
testYImmutability();
testEqualityEqual();
testEqualityXNotEqual();
testEqualityYNotEqual()
