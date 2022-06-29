import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
		<section id='skills' className="skills">
			<h1>Tools I've worked with</h1>
			<div className="card">
				<i className="fa-brands fa-html5 fa-6x"></i>
				<p>HTML</p>
			</div>
			<div className="card">
				<i className="fa-brands fa-css3 fa-6x"></i>
				<p>CSS</p>
			</div>
			<div className="card">
				<i className="fa-brands fa-js fa-6x"></i>
				<p>Javascript</p>
			</div>
			<div className="card">
				<i className="fa-brands fa-react fa-6x"></i>
				<p>React</p>
			</div>
			<div className="card">
				<i className="fa-brands fa-git fa-6x"></i>
				<p>GIT</p>
			</div>
		</section>
	);
}

export default Skills