import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<h1>Get in touch</h1>
			<a href="/" target="_blank" rel="noreferrer">
				<button>View my CV</button>
			</a>
			<p>
				IF YOU BELIEVE I AM THE RIGHT FIT FOR YOUR TEAM AND WOULD LIKE TO
				CONTACT ME PLEASE DO SO VIA:
			</p>
			<div className="two-is">
				<a
					href="https://www.linkedin.com/in/osman-hersi-b7a8a3139/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a href="https://github.com/ohersi1" target="_blank" rel="noreferrer">
					<i className="fa-brands fa-github"></i>
				</a>
			</div>
			<p>
				Alternatively, you can contact me directly via email:
				osmanhhersi@gmail.com
			</p>
		</section>
	);
};

export default Contact;
