'use strict';

export default class Point {	
	constructor(x, y) {
		this.validateCoordinate(x, "x is NaN or not a number");
		this.validateCoordinate(y, "y is NaN or not a number");

		this.x = x;
		this.y = y;

		Object.freeze(this);
	}

	validateCoordinate(param, message) {
		if ((typeof param != "number") || isNaN(param)) {
			throw new TypeError(message);
		}
	}

	equals(point) {
		return this.x === point.x && this.y === point.y;
	}
}


