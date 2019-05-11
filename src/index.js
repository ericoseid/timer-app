import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BoxComponent from './box-component';
import Point from './point';
import Box from './box';

const div = document.createElement('div');
div.id = 'root';
document.body.append(div);

let p = new Point(10, 10);
let b = new Box(p, 1);

ReactDOM.render(
	React.createElement(BoxComponent, {data : b}, null),
	document.getElementById('root')
);

