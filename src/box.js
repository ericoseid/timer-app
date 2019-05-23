'use strict';

import React from 'react';

export default class Box extends React.Component {
	constructor(props) {
		super(props);	

		this.createProperties = this.createProperties.bind(this);
	}

	createProperties() {
		let upperLeft = this.props.data.upperLeft;

		return (
			{className : 'box',
			key : this.props.data.uniqueKey,
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

