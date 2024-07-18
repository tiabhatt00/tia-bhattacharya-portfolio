"use client";

import React, { useEffect, useState } from 'react';
import { Title } from '../../typography';
import { University, Coursework, Activities } from './education-sections';

const Education: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number>(0);

    const sections = [
        { component: <University />, key: 'university' },
        { component: <Coursework />, key: 'coursework' },
        { component: <Activities />, key: 'activities' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSection(prevSection => (prevSection + 1) % sections.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, [sections.length]);

    return (
        <section className="relative h-96 bg-pink font-prompt">
            <div className="absolute top-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Title color="black">Education</Title>
            </div>

            <div className="absolute bottom-8 right-0 p-6 md:p-12 lg:p-16 xl:p-24 max-w-[70%] text-right">
                {sections[activeSection].component}
            </div>

            {/* TO-DO: Integrate toggle-section Component */}

            <div className="absolute bottom-0 right-4 pb-4 md:pb-8 lg:pb-12 xl:pb-16 pr-6 md:pr-12 lg:pr-16 xl:pr-24 flex space-x-2">
                {sections.map((section, index) => (
                    <button
                        key={section.key}
                        onClick={() => setActiveSection(index)}
                        className={`w-1.5 h-1.5 rounded-full border border-black ${activeSection === index ? 'bg-black opacity-100' : 'bg-black opacity-40'}`}
                        aria-label={`Section ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Education;
