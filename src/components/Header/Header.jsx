import React from 'react';
import './Header.css';

const Header = ({ heading, details }) => {
	return (
		<div class="header-container">
			<h1>{heading}</h1>
			<p>{details}</p>
		</div>
	);
};

export default Header;
