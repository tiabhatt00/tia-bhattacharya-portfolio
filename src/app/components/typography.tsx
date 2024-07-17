import React from 'react';

interface TypographyProps {
    children: React.ReactNode;
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'italic';
    color?: 'white' | 'black' | 'blue' | 'pink' | 'darkPink';
    className?: string;
    onClick?: () => void;
}

const weightClasses = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
    italic: 'font-italic',
};

const colorClasses = {
    white: 'text-white',
    black: 'text-black',
    blue: 'text-blue',
    pink: 'text-pink',
    darkPink: 'text-darkPink'
};

export const Title: React.FC<TypographyProps> = ({ children, weight = 'medium', color = 'white', className = '', onClick }) => (
    <h1 className={`text-40px ${weightClasses[weight]} ${colorClasses[color]} ${className}`} onClick={onClick}>{children}</h1>
);

export const Header: React.FC<TypographyProps> = ({ children, weight = 'medium', color = 'white', className = '', onClick }) => (
    <h2 className={`text-20px ${weightClasses[weight]} ${colorClasses[color]} ${className}`} onClick={onClick}>{children}</h2>
);

export const Body: React.FC<TypographyProps> = ({ children, weight = 'light', color = 'black', className = '', onClick }) => (
    <p className={`text-16px ${weightClasses[weight]} ${colorClasses[color]} ${className}`} onClick={onClick}>{children}</p>
);

export const BodySmall: React.FC<TypographyProps> = ({ children, weight = 'light', color = 'black', className = '', onClick }) => (
    <p className={`text-14px ${weightClasses[weight]} ${colorClasses[color]} ${className}`} onClick={onClick}>{children}</p>
);

export const Description: React.FC<TypographyProps> = ({ children, weight = 'light', color = 'blue', className = '', onClick }) => (
    <p className={`text-11px ${weightClasses[weight]} ${colorClasses[color]} ${className}`} onClick={onClick}>{children}</p>
);

export const Label: React.FC<TypographyProps> = ({ children, weight = 'italic', color = 'pink', className = '', onClick }) => (
    <span className={`text-11px ${weightClasses[weight]} ${colorClasses[color]} ${className}`} onClick={onClick}>{children}</span>
);
