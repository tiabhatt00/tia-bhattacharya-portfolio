import React from 'react';
import LinkedInIcon from '../../../icons/linkedin-icon';
import GitHubIcon from '../../../icons/github-icon';

const Socials: React.FC = () => (
    <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/tia-bhattacharya/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
        </a>
        <a href="https://github.com/tiabhatt00" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
        </a>
    </div>
);

export default Socials;
