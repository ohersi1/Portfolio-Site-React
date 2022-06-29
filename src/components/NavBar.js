import React from "react";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div>
			<section id="navbar" className="nav-links">
				<ul className="links">
					<a href='#about-section'>
						<li>About</li>
					</a>
					<a href='#skills'>
						<li>Skills</li>
					</a>
					<a href='#portfolio'>
						<li>Portfolio</li>
					</a>
					<a href='#contact'>
						<li>Contact</li>
					</a>
				</ul>
			</section>
		</div>
	);
};

export default NavBar;
