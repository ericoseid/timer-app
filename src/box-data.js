'use strict';

export default class BoxData {
	constructor(upperLeft, uniqueKey) {
		this.validateConstructorParam(upperLeft, "upperLeft is null");
		this.validateConstructorParam(uniqueKey, "uniqueKey is null");

		this.upperLeft = upperLeft;
		this.uniqueKey = uniqueKey;
		this.zIndex = -1;
	}

	validateConstructorParam(param, message) {
		if (param === null || param === undefined) {
			throw new TypeError(message);
		}
	}

	isPointInside(point) {
		if ((point.x > this.upperLeft.x && point.x < this.upperLeft.x + 200)
				&& (point.y > this.upperLeft.y && point.y < this.upperLeft.y + 200)) {
			return true;
		}

		return false;
	}
}

