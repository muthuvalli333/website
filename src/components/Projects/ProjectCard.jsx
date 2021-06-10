import React from 'react';
import './Projects.css';

const ProjectCard = ({ projectName, projectDescription, imageUrl, videoUrl, projectUrl }) => {
	return (
		<div className="project-card">
			<div className="image-container">
				<img src={imageUrl} alt="project" className="project-image" />
			</div>

			<div className="project-details-container">
				<h2 className="project-heading">{projectName}</h2>
				<p className="project-details">{projectDescription}</p>
				<p className="project-yt-link">See entire project and code in my github</p>
			</div>
		</div>
	);
};

export default ProjectCard;
