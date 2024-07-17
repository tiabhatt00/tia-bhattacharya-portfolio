import React from 'react';
import { Header, BodySmall, Body } from '../../typography';

const University: React.FC = () => (
    <div className="mb-4">
        <Header color='black' weight='bold' className="mb-2">University of California, Santa Cruz</Header>
        <Body color='black' weight='light'>B.S in Cognitive Science, Concentration in Computer Science</Body>
        <BodySmall color='black' weight='medium'>September 2018 - March 2022</BodySmall>
    </div>
);

const Coursework: React.FC = () => (
    <div className="mb-4">
        <Header color='black' weight='bold' className="mb-2">Coursework</Header>
        <Body color='black' weight='light'>
            Data Structures & Algorithms, Computer Architecture, Computer Systems & Assembly Language, Computational Models, Machine Learning, Comparative Programming Languages, Research Methods, Human-Centered Design Research, Web Applications
        </Body>
    </div>
);

const Activities: React.FC = () => (
    <div className="mb-4">
        <Header color='black' weight='bold' className="mb-2">Activities</Header>
        <div className="flex justify-between">
            <Body color='black' weight='medium'>180 Degrees Consulting</Body>
            <Body color='black' weight='light'>President</Body>
        </div>
        <div className="flex justify-between gap-6">
            <Body color='black' weight='medium'>Google Developer Student Clubs</Body>
            <Body color='black' weight='light'>Director</Body>
        </div>
        <div className="flex justify-between">
            <Body color='black' weight='medium'>Tech4Good</Body>
            <Body color='black' weight='light'>Research Lead</Body>
        </div>
    </div>
);

export { University, Coursework, Activities };
