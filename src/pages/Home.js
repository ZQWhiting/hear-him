import React, { useState } from 'react';

import Cinema from './Cinema';

const Home = () => {
	const [showCinema, setShowCinema] = useState(true);

	return (
		<div>
			{showCinema ? (
				<Cinema setShowCinema={setShowCinema} />
			) : (
				<div>Hello.</div>
			)}
		</div>
	);
};

export default Home;

// Home page starts off with a cinematic and ends on a navigation page.
