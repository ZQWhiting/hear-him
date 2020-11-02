import React, { useState } from 'react';

import Slide from '../components/Slide';

const Cinema = ({ setShowCinema }) => {
	const [slideNumber, setSlideNumber] = useState(0);

	const slideIncrement = async () => {
		if (slideNumber < 2) {
			setSlideNumber(slideNumber + 1);
		} else {
			setShowCinema(false);
		}
	};

	return (
		<button onClick={slideIncrement}>
			<Slide slideNumber={slideNumber} />
		</button>
	);
};

export default Cinema;

// Cinema has three slides
