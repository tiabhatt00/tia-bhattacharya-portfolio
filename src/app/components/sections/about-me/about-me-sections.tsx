import React from 'react';
import { BodySmall } from '../../typography';

const Section1: React.FC = () => (
    <>
        <BodySmall color="black">
            I’m a software engineer with over two years of experience in full stack development, API design, and managing application lifecycles and deployments in cloud-native environments. I specialize in delivering end-to-end solutions with expertise in backend technologies such as Java, Spring Boot, and Python, as well as frontend technologies like JavaScript, TypeScript, React, and Angular.
        </BodySmall>
        <br /><br />
        <BodySmall color="black">
            At Appen, I recently contributed to designing the application architecture and implementing key features for a new frontend application. My work involved building maintainable UI components, seamlessly integrating them with backend services, enhancing APIs to meet evolving user needs, and revitalizing legacy backend services to significantly boost performance.
        </BodySmall>
    </>
);

const Section2: React.FC = () => (
    <BodySmall color="black">
        Building applications that enhance user experiences and address real-world challenges is what drives my passion for software engineering. It offers diverse opportunities for learning and growth, and the ability to create tangible solutions to complex problems is incredibly motivating.
    </BodySmall>
);

const Section3: React.FC = () => (
    <BodySmall color="black">
        I am now looking for new opportunities where I can apply my skills to contribute to meaningful projects. I am eager to work in environments that challenge me and where I can make a real impact.
    </BodySmall>
);

export { Section1, Section2, Section3 };
