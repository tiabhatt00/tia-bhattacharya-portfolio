"use client";

import { Header } from '@/app/components/typography';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');

    const handleSetActive = (to: string) => {
        setActiveLink(to);
    };

    return (
        <div className="flex flex-col mt-4">
            {['About', 'Skills', 'Experience', 'Education', 'Projects'].map((section) => (
                <Link
                    key={section}
                    activeClass="font-bold"
                    to={section.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`cursor-pointer mb-2 transform hover:scale-105 ${activeLink === section.toLowerCase() ? 'font-bold' : 'font-normal'}`}
                >
                    <Header weight='light'>{section}</Header>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
