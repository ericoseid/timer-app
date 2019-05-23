'use strict';

export default class BoxData {
	constructor(upperLeft, uniqueKey) {
		this.validateConstructorParam(upperLeft, "upperLeft is null");
		this.validateConstructorParam(uniqueKey, "uniqueKey is null");

		this.upperLeft = upperLeft;
		this.uniqueKey = uniqueKey;

		Object.freeze(this);		
	}

	validateConstructorParam(param, message) {
		if (param === null || param === undefined) {
			throw new TypeError(message);
		}
	}
}

