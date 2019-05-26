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

		let draggedBoxIndex = undefined;
		let draggedBoxOrigPosition;

		this.state = {
			carouselData : carouselData,
		};

		this.addBox = this.addBox.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUpOrLeave = this.onMouseUpOrLeave.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.createBoxProperties = this.createBoxProperties.bind(this);
	}

	addBox() {
		this.state.carouselData.addBox();

		this.setState({
			carouselData : this.state.carouselData,
		});
	}

	onMouseDown(index) {
		this.draggedBoxOrigPosition = 
			this.state.carouselData.boxes[index].upperLeft;

		this.draggedBoxIndex = index;
	}

	onMouseUpOrLeave() {
		if (this.draggedBoxIndex != undefined) {
			let draggedBox = this.state.carouselData.boxes[this.draggedBoxIndex];
		
			draggedBox.upperLeft = this.draggedBoxOrigPosition;

			this.draggedBoxIndex = undefined;

			this.setState({
				carouselData : this.state.carouselData,
			});
		}
	}

	onMouseMove(event) {
		if (this.draggedBoxIndex != undefined) {
			let draggedBox = this.state.carouselData.boxes[this.draggedBoxIndex];

			let newX = draggedBox.upperLeft.x + event.movementX;
			let newY = draggedBox.upperLeft.y + event.movementY;

			draggedBox.upperLeft = new Point(newX, newY);

			this.setState({
				carouselData : this.state.carouselData,
			});
		}
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
