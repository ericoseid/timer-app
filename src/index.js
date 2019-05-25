import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import BoxCarousel from './box-carousel';
import './style.css';

const div = document.createElement('div');
div.id = 'root';
document.body.append(div);

ReactDOM.render(
	React.createElement(BoxCarousel, null, null),
	document.getElementById('root')
);


