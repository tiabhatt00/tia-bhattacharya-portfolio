import React from "react";
import PacManIMG from "../../images/pacman-project";
import FacebookProjectIMG from "../../images/facebook-project";
import { Description, Header, Label } from "../../typography";


interface ProjectCardProps {
    title: string;
    description: string;
    skills: string[];
    projectImage: React.FC<React.SVGProps<SVGSVGElement>>; // React component for SVG
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, projectImage: ProjectImage }) => {
    return (
        <div className="relative w-144 h-96 perspective">
            <div className="absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
                <div className="absolute w-full h-full bg-[#191922] rounded-lg shadow-lg backface-hidden flex items-center justify-center">
                    <ProjectImage className="w-full h-full object-cover p-4" />
                </div>
                <div className="absolute w-full h-full bg-[#191922] rounded-lg shadow-lg backface-hidden rotate-y-180 flex flex-col items-left justify-center p-10">
                    <Header color="white" weight="medium" className="text-left">{title}</Header>
                    <Description className="text-left mt-2">{description}</Description>
                    <Label className="text-left mt-2">{skills.join(', ')}</Label>
                </div>
            </div>
        </div>
    );
};

const ProjectContent: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-10 p-4">
            <ProjectCard
                title="Pacman AI"
                description="As part of a UC Berkeley lab project, this intelligent system for Pac-Man was developed using Python. The project implemented state-space search algorithms for navigating complex mazes, probabilistic inference for predicting ghost positions, and reinforcement learning for optimizing decision-making over time. Advanced pathfinding algorithms such as A* and Dijkstra's significantly enhanced the efficiency of Pac-Man's movements in collecting pellets and avoiding ghosts. The system's ability to learn from interactions and improve its strategy over time highlighted the practical applications of reinforcement learning in dynamic environments. This project exemplifies the integration of AI principles in game development, showcasing expertise in machine learning techniques, algorithm implementation, and the creation of adaptive systems."
                skills={['Python', 'State-Space Search Algorithms', 'Probabilistic Inference', 'Reinforcement Learning', 'Pathfinding Algorithms (A* and Dijkstra\'s)', 'Machine Learning']}
                projectImage={PacManIMG}
            />
            <ProjectCard
                title="Facebook Marketplace Clone"
                description="This project replicates the functionality of Facebook Marketplace, showcasing a full-stack application built with modern web technologies. The frontend, developed in React, closely mimics the user interface and user experience of the actual Facebook Marketplace, providing users with an intuitive platform to list and browse items. On the backend, RESTful API endpoints were implemented using NodeJS and ExpressJS, facilitating efficient communication between the client and server. PostgreSQL was used to manage the application's database, ensuring robust data storage and retrieval. Additionally, the project features a login authentication system to secure user data and access. Docker was utilized to containerize the application, streamlining development and deployment processes."
                skills={['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker']}
                projectImage={FacebookProjectIMG}
            />
        </div>
    );
};

export default ProjectContent;
