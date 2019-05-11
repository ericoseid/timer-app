import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BoxComponent from './box-component';

const div = document.createElement('div');
div.id = 'root';
document.body.append(div);

ReactDOM.render(
	React.createElement(BoxComponent, null, null),
	document.getElementById('root')
);

