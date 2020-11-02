import React from 'react';

import imageRefs from './imageRefs';

const Slide = ({ slideNumber }) => {
	const slides = [
		imageRefs.creation[
			Math.floor(Math.random() * imageRefs.creation.length)
		],
		imageRefs.mortal[Math.floor(Math.random() * imageRefs.mortal.length)],
		imageRefs.ressurected[
			Math.floor(Math.random() * imageRefs.ressurected.length)
		],
	];

	return (
		<div>
			<img src={require(slides[slideNumber].imagePath)} />
		</div>
	);
};

export default Slide;
