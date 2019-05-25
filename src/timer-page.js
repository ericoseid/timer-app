'use strict';

import React from 'react';
import BoxCarouselData from './box-carousel-data';
import BoxCarousel from './box-carousel';

export default class Page extends React.Component {
	constructor(props) {
		super(props);

		let carouselData = new BoxCarouselData();
		carouselData.addBox();
		carouselData.addBox();

		this.state = {
			data : carouselData,
		};

		this.addBox = this.addBox.bind(this);
	}

	addBox() {
		this.state.data.addBox();

		this.setState({
			data : this.state.data,
		});
	}

	render() {
		return ( 
			React.createElement('div', null, 
				React.createElement(BoxCarousel, {data : this.state.data}, null),
				React.createElement('button', {className : 'addBoxButton', onClick : this.addBox}, 'Add A New Box')
			)
		);
	}
}
