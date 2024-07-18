"use client";

import React from 'react';
import useMousePosition from '../../../../hooks/useMousePosition';

interface MouseTrackedGradientProps {
  colorScheme: 'pink' | 'black' | 'white';
}

const MouseTrackedGradient: React.FC<MouseTrackedGradientProps> = ({ colorScheme }) => {
  const { x, y } = useMousePosition();

  const gradients = {
    pink: `radial-gradient(400px at ${x}px ${y}px, rgba(227, 177, 196, 0.5), transparent 70%)`,
    black: `radial-gradient(400px at ${x}px ${y}px, rgba(27, 42, 73, 0.3), transparent 90%)`,
    white: `radial-gradient(400px at ${x}px ${y}px, rgba(27, 42, 73, 0.3), transparent 30%)`,
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: gradients[colorScheme],
        transition: 'background 0.2s ease',
      }}
    />
  );
};

export default MouseTrackedGradient;
