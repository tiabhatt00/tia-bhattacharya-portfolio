"use client";

import React, { useState, useEffect } from 'react';
import { Title, BodySmall } from '../../typography';
import { Section1, Section2, Section3 } from './about-me-sections';

const AboutMe: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number>(0);

    const sections = [
        { component: <Section1 />, key: 'university' },
        { component: <Section2 />, key: 'coursework' },
        { component: <Section3 />, key: 'activities' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSection(prevSection => (prevSection + 1) % sections.length);
        }, 10000); 

        return () => clearInterval(interval); 
    }, [sections.length]);

    return (
        <section className="relative h-96 bg-pink font-prompt">
            <div className="absolute top-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Title color="black">hi, i&#39;m tia!</Title>
            </div>
            <div className="absolute bottom-6 right-4 pb-4 md:pb-8 lg:pb-12 xl:pb-16 pr-6 md:pr-12 lg:pr-16 xl:pr-24 max-w-[70%] text-right">
                {sections[activeSection].component}
            </div>

            <div className="absolute bottom-0 right-4 pb-4 md:pb-8 lg:pb-12 xl:pb-16 pr-6 md:pr-12 lg:pr-16 xl:pr-24 flex space-x-2">
                {sections.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSection(index)}
                        className={`w-1.5 h-1.5 rounded-full border border-black ${activeSection === index ? 'bg-black opacity-100' : 'bg-black opacity-40'}`}
                        aria-label={`Section ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default AboutMe;

