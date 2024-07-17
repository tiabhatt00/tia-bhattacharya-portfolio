import { Description, Header, Label } from '@/app/components/typography';
import React from 'react';

interface ExperienceCardProps {
  company: string;
  position: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, position, description, skills }) => {
  return (
    <div className="p-6 rounded-lg ransition transition duration-300 hover-bg-white-opacity-2">
      <div className="flex items-center justify-between mb-4">
        <Header weight='medium'>{company}</Header>
        <Header weight='light' className="text-right">{position}</Header>
      </div>
      <Description className="mb-4">{description}</Description>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Label
            key={index}
            color='darkPink'
            weight='medium'
            className="pink-opacity-40 px-4 py-1 rounded-md"
          >
            {skill}
          </Label>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
