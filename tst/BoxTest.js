'use strict';

const assert = require('assert');
const Box = require('../src/box.js');
const Point = require('../src/point.js');

function testConstructorInvalidParameters() {

	let params = [{upperLeft : null, uniqueKey : 3},
		      {upperLeft : undefined, uniqueKey : 3},
		      {upperLeft : new Point(1, 2), uniqueKey : null},
		      {upperLeft : new Point(1, 2), uniqueKey : undefined}]

	for (let param of params) {
		let exception;

		try {
			new Box(param.upperLeft, param.uniqueKey);
		} catch (e) {
			exception = e;
		}

		assert.strictEqual("TypeError", exception.name);
	}
}

function testConstructor() {
	let p = new Point(1, 2);
	let b = new Box(p, 3);

	assert(b.upperLeft.equals(p));	
	assert.strictEqual(3, b.uniqueKey);
}

function testImmutabilityUpperLeft() {
	let p = new Point(1, 2);
	let b = new Box(p, 3);

	let exception;

	try {
		b.upperLeft = new Point(0, 0);
	} catch (e) {
		exception = e;
	}

	assert.strictEqual("TypeError", exception.name);
}

function testImmutabilityUniqueKey() {
	let p = new Point(1, 2);
	let b = new Box(p, 3);

	let exception;
	
	try {
		b.uniqueKey = 3;
	} catch (e) {
		exception = e;
	}

	assert.strictEqual("TypeError", exception.name);
}

testConstructor(); 
testConstructorInvalidParameters();
testImmutabilityUpperLeft();
testImmutabilityUniqueKey();

