import React, { useState } from 'react';

import Cinema from './Cinema';

const Home = () => {
    const [showCinema, setShowCinema] = useState(true);

    if (showCinema) {
		return <Cinema setShowCinema={setShowCinema} />;
	} else {
		return (
			<button onClick={() => setShowCinema(true)}>
				
				
				Click to show Cinema
			
			
			</button>
		);
	}
};

export default Home;

// Home page starts off with a cinematic and ends on a navigation page.
