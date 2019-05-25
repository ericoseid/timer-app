'use strict';

import React from 'react';
import BoxCarouselData from './box-carousel-data.js';
import Box from './box';

export default class BoxCarousel extends React.Component {
	constructor(props) {
		super(props);

		let carouselData = new BoxCarouselData();
		carouselData.addBox();

		let dragged = undefined;

		this.state = {
			carouselData : carouselData,
		};

		this.addBox = this.addBox.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onDrag = this.onDrag.bind(this);
	}

	addBox() {
		this.state.carouselData.addBox();

		this.setState({
			carouselData : this.state.carouselData,
		});
	}

	onMouseDown(index) {
		dragged = this.state.carouselData.boxes[index];
	}

	onMouseUp() {
		dragged = undefined;
	}

	onDrag() {

	}

	render() {
		let boxes = this.state.carouselData.boxes.map((box, index) => 
									React.createElement(Box, {data : box, onMouseDown : (event) => this.onMouseDown(index), onMouseUp : this.onMouseUp}, null)
								);

		return  (
			React.createElement('div', null,
				React.createElement('div', null, boxes),
				React.createElement('button', {className : 'addBoxButton', onClick : this.addBox}, 'Add A Box')
			)
		);
	}
}
