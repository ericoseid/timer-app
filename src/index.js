import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './timer-page';
import './style.css';

const div = document.createElement('div');
div.id = 'root';
document.body.append(div);

ReactDOM.render(
	React.createElement(Page, null, null),
	document.getElementById('root')
);


