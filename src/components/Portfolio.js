import React from "react";
import "./Portfolio.css";
import Picture from "../Images/Stripe Clone.png";
import Picture2 from "../Images/PortfolioSiteImg.png";
import Picture3 from "../Images/WeatherApp.png";
import Picture4 from "../Images/LandingPage.png";
import Picture5 from "../Images/PigGame.png";

const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<h1>Projects</h1>
			<div className="card">
				<img src={Picture5} alt="" />
				<p>
					Pig is a simple dice game. Players take turns to roll a single dice as
					many times as they wish, adding all roll results to a running total,
					but losing their gained score for the turn if they roll a 1. Whoever
					gets a total score of 16 or more first wins. Coded using just HTML,
					CSS and Javascript.
				</p>
				<a href="/" target="_blank" rel="noreferrer">
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/Pig-Game"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture4} alt="" />
				<p>
					This is a landing page with a form to help improve Nando's services.
					Coded using just HTML and CSS
				</p>
				<a href="/" target="_blank" rel="noreferrer">
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/Nandos-SurveyForm"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture2} alt="" />
				<p>
					This is this portfolio site you are currently on. Coded using React
				</p>
				<a href="/" target="_blank" rel="noreferrer">
					<button>View live website</button>
				</a>
				<a href="/" target="_blank" rel="noreferrer">
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture} alt="" />
				<p>
					I recreated the official Stripe homepage. This page is fully
					responsive. Coded using HTML, CSS and React.
				</p>
				<a href="/" target="_blank" rel="noreferrer">
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/StripeClone"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture3} alt="" />
				<p>This is a weather application coded using React</p>
				<a href="/" target="_blank" rel="noreferrer">
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/ReactWeatherApp"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
		</section>
	);
};

export default Portfolio;
