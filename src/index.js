import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import BoxCarouselData from './box-carousel-data';
import BoxCarousel from './box-carousel';
import './style.css';

const div = document.createElement('div');
div.id = 'root';
document.body.append(div);

let d = new BoxCarouselData();
d.addBox();
d.addBox();
d.addBox();

ReactDOM.render(
	React.createElement(BoxCarousel, {data : d}, null),
	document.getElementById('root')
);


