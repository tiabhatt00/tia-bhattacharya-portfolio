"use client";

import React, { useState } from 'react';

interface ToggleSectionProps {
    sections: { component: React.ReactNode; key: string }[];
    containerClassName?: string;
    sectionWrapperClassName?: string;
    buttonWrapperClassName?: string;
    buttonClassName?: (isActive: boolean) => string;
}

const ToggleSection: React.FC<ToggleSectionProps> = ({
    sections,
    containerClassName,
    sectionWrapperClassName,
    buttonWrapperClassName,
    buttonClassName
}) => {
    const [activeSection, setActiveSection] = useState<number>(0);

    return (
        <div className={containerClassName}>
            <div className={sectionWrapperClassName}>
                {sections[activeSection].component}
            </div>
            <div className={buttonWrapperClassName}>
                {sections.map((section, index) => (
                    <button
                        key={section.key}
                        onClick={() => setActiveSection(index)}
                        className={buttonClassName ? buttonClassName(activeSection === index) : ''}
                        aria-label={`Section ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToggleSection;
