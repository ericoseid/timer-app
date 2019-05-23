'use-strict';

import Point from './point';
import BoxData from './box-data';

export default class BoxCarouselData {
	constructor() {
		this.boxes = [];

		this.nextUniqueKey = 0;
		this.nextUpperLeftX = 10;
	}

	addBox() {
		this.boxes.push(new BoxData(new Point(this.nextUpperLeftX, 10),
																this.nextUniqueKey));

		this.nextUniqueKey = this.nextUniqueKey + 1;
    this.nextUpperLeftX = 10 + (220 * this.nextUniqueKey);
	}
}
