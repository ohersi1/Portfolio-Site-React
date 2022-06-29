import React from "react";
import "./About.css";
import Image from "../Images/7F1E6503-0880-4C1A-B2E8-070D0FAE543B.jpg";

const About = () => {
	return (
		<section id="about-section" className="about-section">
			<img className="headshot" src={Image} alt="pic of Osman" />
			<h1>Nice to meet you</h1>
			<p>
				Over the past 2 years I have embarked on a journey that has undoubtedly
				<span className="blue"> challenged</span> me like never before when I
				decided to start
				<span className="blue"> learning</span> how to code. I am a{" "}
				<span className="blue"> self-taught</span> web developer with{" "}
				<span className="blue"> passion</span> and{" "}
				<span className="blue"> determination</span> for anything I set my mind
				to.
			</p>
			<h2>Attributes I bring to the team</h2>
			<div className="two-uls">
				<ul>
					<li>
						<i className="fa-solid fa-circle-check fa-1x"></i> Open-Minded
					</li>
					<li>
						<i className="fa-solid fa-circle-check fa-1x"></i> Team Player
					</li>
					<li>
						<i className="fa-solid fa-circle-check fa-1x"></i> Drive to
						self-improve
					</li>
				</ul>
				<ul>
					<li>
						<i className="fa-solid fa-circle-check fa-1x"></i> Time Management
					</li>
					<li>
						<i className="fa-solid fa-circle-check fa-1x"></i> Communication
					</li>
					<li>
						<i className="fa-solid fa-circle-check fa-1x"></i> Attention to
						detail
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
