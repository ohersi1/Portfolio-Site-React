import "./WelcomeImage.css";

import React from "react";

const WelcomeImage = () => {
	return (
		<section id="welcome-section" className="welcome-section">
			<h1>Hey I'm Osman</h1>
			<p>
				<span className="blue">{"\u003C"}</span> A Web Developer{" "}
				<span className="blue">/{"\u003E"}</span>
			</p>
		</section>
	);
};

export default WelcomeImage;
