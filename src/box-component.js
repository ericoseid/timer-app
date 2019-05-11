'use strict';

import React from 'react';

export default class BoxComponent extends React.Component {

	render() {
		return (
			React.createElement('div', null, 'Fuck webpack')
		);	
	}
}

