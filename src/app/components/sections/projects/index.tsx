"use client";

import React from 'react';
import { Title } from '../../typography';
import Socials from '../components/socials';
import MouseTrackedGradient from '../components/mouse-tracked-gradient';
import ProjectContent from './project-card';

const Projects: React.FC = () => {
    return (
        <section className="h-screen bg-secondary font-prompt relative overflow-hidden">
            <div className="absolute top-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Title color="white">Projects</Title>
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 lg:p-16 xl:p-24">
                <ProjectContent />
            </div>

            <MouseTrackedGradient colorScheme='black' />
        </section>
    );
};

export default Projects;
