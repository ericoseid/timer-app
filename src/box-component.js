'use strict';

import React from 'react';

export default class BoxComponent extends React.Component {
	constructor(props) {
		super(props);	

		this.createProperties = this.createProperties.bind(this);
	}

	createProperties() {
		let upperLeft = this.props.data.upperLeft;
		console.log(upperLeft);
		return (
			{className : 'box',
			style : {top : upperLeft.y,
							left : upperLeft.x
							}
			}
		);	
	}

	render() {
		return (
			React.createElement('div', 
												  this.createProperties(), 
													null)
		);	
	}
}

