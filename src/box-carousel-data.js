'use-strict';

import Point from './point';
import BoxData from './box-data';

export default class BoxCarouselData {
	constructor() {
		this.boxes = [];

		this.shadowBoxIndex;
		this.nextUniqueKey = 0;
		this.nextUpperLeftX = 10;
	}

	addBox() {
		this.boxes.push(new BoxData(new Point(this.nextUpperLeftX, 250),
																this.nextUniqueKey));

		this.nextUniqueKey = this.nextUniqueKey + 1;
    this.nextUpperLeftX = 10 + (220 * this.nextUniqueKey);
	}

	addShadowBox(position) {
		this.boxes.push(new BoxData(position, -1));

		this.shadowBoxIndex = this.boxes.length - 1;
	}

	removeShadowBox() {
		this.boxes.splice(this.shadowBoxIndex, 1);
	}

	moveBox(index, newUpperLeft) {
		let movedBox = this.boxes[index];

		movedBox.upperLeft = newUpperLeft;
	}

	moveBoxFromEvent(index, event) {
		let movedBox = this.boxes[index];

		let newX = movedBox.upperLeft.x + event.movementX;
		let newY = movedBox.upperLeft.y + event.movementY;

		let newUpperLeft = new Point(newX, newY);

		movedBox.upperLeft = newUpperLeft;
	}

	getHoveredBoxIndex(mouseEvent, draggedBoxIndex) {
		let currentMousePosition = new Point(mouseEvent.clientX, mouseEvent.clientY);

		for (let i = 0; i < this.boxes.length; i++) {
      if (i != draggedBoxIndex &&  
          this.boxes[i].isPointInside(currentMousePosition)) {
        return i;
      }   
    }   
    
    return undefined;	
	}	
}
