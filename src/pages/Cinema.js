import React, { useState } from 'react';

import Slide from '../components/Slide';

const Cinema = ({ setShowCinema }) => {
	const [slideNumber, setSlideNumber] = useState(1);

	return (
		<div>
			{slideNumber <= 3 ? (
				<Slide
					slideNumber={slideNumber}
					setSlideNumber={setSlideNumber}
				/>
			) : (
				setShowCinema(false)
			)}
		</div>
	);
};

export default Cinema;

// Cinema has three slides
