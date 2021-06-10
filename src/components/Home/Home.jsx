import React from 'react';
import './Home.css';
import homeAnime from './../Assets/developer3.gif';
import Modal from '../Modal/Modal';
import FooterLink from '../FooterLink/FooterLink';

import { Link } from 'react-router-dom';
class Home extends React.Component {
	state = { showModal: false };
	componentDidMount() {
		setTimeout(() => {
			this.setState({ showModal: true });
		}, 1000);
	}
	closeModal = () => {
		this.setState({ showModal: false });
	};
	render() {
		return (
			<div class="home-container">
				{this.state.showModal && <Modal closeModal={this.closeModal} />}
				<div class="header-text">
					<h1>Welcome to my website </h1>
					<p>This is Muthu valli . A React and React Native Dev.</p>
				</div>

				<div class="head-btns">
					<Link to="/about" className="btn btn-white">
						<p class="btn-text">Know more about me</p>
					</Link>
					<Link to="/contact" className="btn btn-transparent">
						<p class="btn-text">Connect with me</p>
					</Link>
				</div>
				<div class="splash-image">
					<img src={homeAnime} alt="animation" className="home-anime" />
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />

				<FooterLink
					className="lll"
					phrase="Created using my favourite React.    
					Yaaa this is a pure react website."
				/>
			</div>
		);
	}
}
export default Home;
