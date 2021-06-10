import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import contactVector from './../Assets/contact_anime.png';
import github from './../Assets/gh.png';
import linkedin from './../Assets/li.png';
import instagram from './../Assets/in.png';

const Contact = () => {
	return (
		<div className="section-container">
			<Header heading="Get in Touch" details="Just send me a mail" />

			<div class="contact-from-container">
				<form className="contact-form" action="https://formspree.io/f/xwkabkrw" method="POST">
					<input
						type="email"
						placeholder="your email id"
						name="_replyto"
						className="input-box email-input"
					/>

					<textarea
						type="text"
						placeholder="your message"
						name="message"
						className="input-box body-input"
					></textarea>

					<button type="submit" className="contact-btn">
						send Email
					</button>
				</form>
			</div>

			<div class="social-icons-container">
				<a href="https://github.com/muthuvalli333" class="social-icon">
					<img src={github} alt="git" />
				</a>
				<a
					href="https://www.linkedin.com/in/muthu-valliappan-muthu-kumar-639a75182"
					class="social-icon"
				>
					<img src={linkedin} alt="git" />
				</a>
				<a href="https://www.instagram.com/marvellouz_muthuvalli" class="social-icon">
					<img src={instagram} alt="git" />
				</a>
			</div>

			<FooterLink phrase="Need more  " link="about me " toAddress="/about" />

			<div className="vector-frame">
				<img src={contactVector} alt="vector" class="about-vector" />
			</div>
		</div>
	);
};

export default Contact;
