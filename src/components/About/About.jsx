import React from 'react';
import Header from '../Header/Header';
import aboutVector from './../Assets/about_vector.png';
import './About.css';
import FooterLink from '../FooterLink/FooterLink';
import aboutAnime from './../Assets/muthu35577.jpg';
const About = () => {
	return (
		<div className="section-container">
			<Header
				heading="About Me"
				details=" I am MUTHU VALLIAPPAN M -  Final year
				Computer science Engineering Student @ SVCE "
			/>

			<div class="about-main">
				<div className="about-main-left">
					<h1>Education</h1>
					<h2 class="about-sub-head">
						Sri Venkateswara College of Engineering, Sriperumbudur
					</h2>
					<p class="about-details">
						Bachelor of Engineering in Computer Science <br />
						CGPA : 8.0/10 <br />
						YEAR : 2018 - 2022
					</p>
					<h2 class="about-sub-head">
						Alagappa matriculation and higher secondary school,Karaikudi
					</h2>
					<p class="about-details">
						12th std , CS group
						<br />
						Percentage : 93.0% <br />
						YEAR : 2016 - 2018
					</p>
					<h2 class="about-sub-head">
						Alagappa matriculation and higher secondary school,Karaikudi
					</h2>
					<p class="about-details">
						10th std <br />
						Percentage : 95.0% <br /> YEAR: 2016
					</p>
				</div>
				<div class="about-main-right">
					<img src={aboutAnime} className="about-anime" alt="about" />
				</div>
			</div>

			<FooterLink phrase="Check out my  " link="projects  " toAddress="/projects" />
			<div class="vector-frame">
				<img src={aboutVector} className="about-vector" alt="about-vector" />
			</div>
		</div>
	);
};

export default About;
