"use client";

import React from 'react';
import { Title } from '../../typography';
import Socials from '../components/socials';
import MouseTrackedGradient from '../components/mouse-tracked-gradient';
import ExperienceCard from '../components/experience-card';
import { experiences } from './constants';

const Experience: React.FC = () => {
    return (
        <section className="h-screen bg-secondary font-prompt relative overflow-hidden">
            <div className="absolute top-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Title color="white">Experience</Title>
            </div>

            <div className="absolute inset-0 flex items-center justify-end p-6 md:p-12 lg:p-16 xl:p-24">
                <div className="w-full max-w-[45%] max-h-[98%] overflow-y-auto no-scrollbar">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            company={exp.company}
                            position={exp.position}
                            description={exp.description}
                            skills={exp.skills}
                        />
                    ))}
                </div>
            </div>

            <MouseTrackedGradient colorScheme='black' />
        </section>
    );
};

export default Experience;
