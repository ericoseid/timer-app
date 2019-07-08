'use strict';

import React from 'react';

export default class Box extends React.Component {
	constructor(props) {
		super(props);	

		let visible = true;
		this.createProperties = this.createProperties.bind(this);
	}

	createProperties() {
		let upperLeft = this.props.data.upperLeft;
		let zIndex = this.props.data.zIndex;

		return (
			{className : 'box',
			onMouseDown : this.props.onMouseDown,
			onMouseUp : this.props.onMouseUpOrLeave,
			onMouseLeave : this.props.onMouseUpOrLeave,
			onMouseMove : this.props.onMouseMove,
			key : this.props.data.uniqueKey,
			style : {top : upperLeft.y,
							left : upperLeft.x,
							zIndex : zIndex,
							}
			}
		);	
	}

	render() {
		if (this.props.data.visible) {
			return (
				React.createElement('div', 
		  										  this.createProperties(), 
		  											React.createElement('p', {style : {fontSize : 100}}, this.props.data.uniqueKey))
			);	
		}

		return null;
	}
}

