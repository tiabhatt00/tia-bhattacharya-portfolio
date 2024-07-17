"use client";

import React, { useState } from 'react';
import { Title, BodySmall } from '../../typography';

const AboutMe: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number>(0);

    const sections = [
        [
            "I’m a software engineer with over two years of experience in full stack development, API design, and managing application lifecycles and deployments in cloud-native environments. I specialize in delivering end-to-end solutions with expertise in backend technologies such as Java, Spring Boot, and Python, as well as frontend technologies like JavaScript, TypeScript, React, and Angular.",
            "At Appen, I recently contributed to designing the application architecture and implementing key features for a new frontend application. My work involved building maintainable UI components, seamlessly integrating them with backend services, enhancing APIs to meet evolving user needs, and revitalizing legacy backend services to significantly boost performance."
        ],
        [
            "Building applications that enhance user experiences and address real-world challenges is what drives my passion for software engineering. It offers diverse opportunities for learning and growth, and the ability to create tangible solutions to complex problems is incredibly motivating."
        ],
        [
            "I am now looking for new opportunities where I can apply my skills to contribute to meaningful projects. I am eager to work in environments that challenge me and where I can make a real impact."
        ]
    ];

    return (
        <section className="relative h-96 bg-pink font-prompt">
            <div className="absolute top-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Title color="black">hi, i&#39;m tia!</Title>
            </div>

            <div className="absolute bottom-8 right-0 p-6 md:p-12 lg:p-16 xl:p-24 max-w-[70%] text-right">
                {sections[activeSection].map((line, index) => (
                    <BodySmall key={index} color="black">
                        {line}
                        {index < sections[activeSection].length - 1 && <><br /><br /></>}
                    </BodySmall>
                ))}
            </div>

            {/* TO-DO: Integrate toggle-section Component */}

            <div className="absolute bottom-0 right-4 p-6 md:p-12 lg:p-16 xl:p-24 flex space-x-2">
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
