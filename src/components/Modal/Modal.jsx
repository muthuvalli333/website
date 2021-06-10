import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
	return ReactDOM.createPortal(
		<div onClick={closeModal} className="modal-overlay">
			<div onClick={(e) => e.stopPropagation()} className="modal-container">
				<div className="upper-section">
					<h1>Hey there everyone 😀</h1>
					<p onClick={closeModal} className="close">
						&times;
					</p>
				</div>
				<div className="middle-section">
					<h3>Going to reach 2K+ followers and connections on LinkedIn</h3>

					<h4>Click Join button and Directly jump to my profile . Thank you</h4>
				</div>
				<div className="lower-section">
					<a onClick={closeModal} className="modal-btn btn-red">
						Close
					</a>
					<a
						href="https://www.linkedin.com/in/muthu-valliappan-muthu-kumar-639a75182"
						target="_blank"
						rel="noreferrer"
						className="modal-btn btn-green"
					>
						Join
					</a>
				</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
