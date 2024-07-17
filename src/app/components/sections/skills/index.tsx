"use client";

import React, { useState } from 'react';
import { Header, Title } from '../../typography';
import { technicalSkills } from './constants';
// import MouseTrackedGradient from '../components/mouse-tracked-gradient';

const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <section className="relative h-96 bg-primary font-prompt">
            <div className="absolute top-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Title color="black">Skills</Title>
            </div>

            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center">
                {activeCategory && (
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-wrap justify-center gap-6">
                            {technicalSkills[activeCategory].map(skill => (
                                <Header
                                    key={skill}
                                    color='darkPink'
                                    weight='medium'
                                    className="pink-opacity-40 px-4 py-1 rounded-md transform hover:scale-105"
                                >
                                    {skill}
                                </Header>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 right-0 p-6 md:p-12 lg:p-16 xl:p-24 text-right space-y-1">
                {Object.keys(technicalSkills).map(category => (
                    <Header
                        key={category}
                        color='black'
                        weight={activeCategory === category ? 'bold' : 'regular'}
                        className="cursor-pointer transform hover:scale-105"
                        onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                    >
                        {category}
                    </Header>
                ))}
            </div>

            {/* <MouseTrackedGradient colorScheme='white'/> */}
        </section>
    );
};

export default Skills;
