"use client";

import React from 'react';
import { Header, Title } from '../../typography';
import Socials from '../components/socials';
import Navigation from '../components/navigation';
import MouseTrackedGradient from '../components/mouse-tracked-gradient';

const TitlePage: React.FC = () => {
    return (
        <section className="h-screen bg-secondary font-prompt relative overflow-hidden">
            <div className="absolute top-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Title color="white">Tia Bhattacharya</Title>
                <Header color='white' weight='light'>Full-Stack Software Engineer</Header>
            </div>

            <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Socials />
            </div>

            <div className="absolute bottom-0 right-0 p-6 md:p-12 lg:p-16 xl:p-24">
                <Navigation />
            </div>

            <MouseTrackedGradient colorScheme='black'/>
        </section>
    );
};

export default TitlePage;
