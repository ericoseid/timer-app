'use strict';

import React from 'react';
import BoxCarouselData from './box-carousel-data.js';
import Box from './box';
import Point from './point';

export default class BoxCarousel extends React.Component {
	constructor(props) {
		super(props);

		let carouselData = new BoxCarouselData();
		carouselData.addBox();
		carouselData.addBox();

		let draggedBoxIndex = undefined;
		let draggedBoxOrigPosition;
		let hoveredBoxIndex = undefined;
		let hoveredBoxOrigPosition;

		this.state = {
			carouselData : carouselData,
		};

		this.addBox = this.addBox.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUpOrLeave = this.onMouseUpOrLeave.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.getHoveredBoxIndex = this.getHoveredBoxIndex.bind(this);
		this.createBoxProperties = this.createBoxProperties.bind(this);
		this.updateHoveredBox = this.updateHoveredBox.bind(this);
	}

	addBox() {
		this.state.carouselData.addBox();

		this.resetState();
	}

	onMouseDown(index) {
		this.state.carouselData.boxes[index].zIndex = 1;

		this.draggedBoxOrigPosition = 
			this.state.carouselData.boxes[index].upperLeft;

		this.draggedBoxIndex = index;
	}

	onMouseUpOrLeave() {
		if (this.draggedBoxIndex != undefined) {
			if (this.hoveredBoxIndex != undefined) {
				let hoveredBox = this.state.carouselData.boxes[this.hoveredBoxIndex];
				hoveredBox.visible = true;

				this.state.carouselData.moveBox(this.draggedBoxIndex, hoveredBox.upperLeft);
				this.state.carouselData.moveBox(this.hoveredBoxIndex, this.draggedBoxOrigPosition);
			} else {
				this.state.carouselData.moveBox(this.draggedBoxIndex, this.draggedBoxOrigPosition);
			}

			this.state.carouselData.boxes[this.draggedBoxIndex].zIndex = 0;
			this.draggedBoxIndex = undefined;
			this.hoveredBox = undefined;

			this.resetState();
		}
	}

	onMouseMove(event) {
		if (this.draggedBoxIndex != undefined) {
			this.state.carouselData.moveBoxFromEvent(this.draggedBoxIndex, event);
			
			this.updateHoveredBox(event);
					
			this.resetState();
		}
	}
	
	updateHoveredBox(event) {
			let newHoveredBoxIndex = this.getHoveredBoxIndex(event);
			if (this.hoveredBoxIndex != undefined &&
					newHoveredBoxIndex != this.hoveredBoxIndex) {
				this.state.carouselData.boxes[this.hoveredBoxIndex].visible = true;
			}
	
			this.hoveredBoxIndex = newHoveredBoxIndex;
			if (this.hoveredBoxIndex != undefined) {
				this.state.carouselData.boxes[this.hoveredBoxIndex].visible = false;
			}			
	}

	getHoveredBoxIndex(event) {
		let currentMousePosition = new Point(event.clientX, event.clientY);

		for (let i = 0; i < this.state.carouselData.boxes.length; i++) {
			if (i != this.draggedBoxIndex && 
					this.state.carouselData.boxes[i].isPointInside(currentMousePosition)) {
				return i;
			}
		}
		
		return undefined;
	}

	createBoxProperties(box, index) {
		return (
			{data : box, 
		 	 onMouseDown : (event) => this.onMouseDown(index), 
			 onMouseUpOrLeave : this.onMouseUpOrLeave,
			 onMouseMove : (event) => this.onMouseMove(event),
			}
		);
	}	

	resetState() {
		this.setState({
			carouselData : this.state.carouselData,
		});
	}

	render() {
		let boxes = this.state.carouselData.boxes.map((box, index) => 
									React.createElement(Box, 
																			this.createBoxProperties(box, index), 
																			null)
								);

		return  (
			React.createElement('div', null,
				React.createElement('div', null, boxes),
				React.createElement('button', {className : 'addBoxButton', onClick : this.addBox}, 'Add A Box')
			)
		);
	}
}
