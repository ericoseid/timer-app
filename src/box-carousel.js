'use strict';

import React from 'react';
import Box from './box';

export default class BoxCarousel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let boxes = this.props.data.boxes.map((box) =>
									React.createElement(Box, {data : box}, null)
								);

		return  (React.createElement('div', null, boxes));
	}
}
